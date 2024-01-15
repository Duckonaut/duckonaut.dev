## The inspiration
Around a week ago, I was working on some projects, as usual, and had YouTube playing on the
second monitor. The video roulette landed on
[ThePrimagen](https://www.youtube.com/watch?v=r4HyasuvjKM). This time he was reading a post that
really intrigued me, because it shared many of the sentiments that were boiling in my head. This
website you're reading was originally written in raw HTML, served on GitHub pages. This was
obviously not ideal for maintenance. Adding anything involved copypasting large chunks of
code, changing anything about the layout required changes across multiple files. Not a very
satisfying process, and it made me avoid doing anything with it.

Then, I had to learn React. It was pretty neat. I could define *actual, reusable components*.
I could actually write logic to manipulate data! Have it structured! Write functions! And it
only needed small changes to the actual HTML of my site, I just had to move it around a bit
so it sat right in the middle of some TypeScript code.

I thought this was a really neat idea. So I rewrote the old website in it, and even added some
*visual flair*, like the shader at the top of this page (I had to show off my love of graphics
programming *somehow*). And to manage the project, I used [Vite](https://vitejs.dev/), which let
me easily pack up the project into static files, and still serve them from GitHub pages (with a
neat tool to automate it, [react-gh-pages](https://github.com/gitname/react-gh-pages)). I was
pretty proud of how it looked, and it was a good experience to write.

But after a while, I wanted to build a blog. Everyone has one, right? Why not me? I can do
interesting things too. But as of then, the project and games sections of the website were just
big JSON files, included into the TS of the React project. I couldn't think of a simpler way to
have the data and still keep all of the site static. I did not really want to pay for hosting if
I didn't have to. But a project description needed formatting sometimes, so it used a rather ugly
way of just storing the HTML as a string in the JSON, like so:

```
json
[
  {
    "name": "Mr Final Boss",
    "name_normalized": "mr-final-boss",
    "type": "game",
    "link": "https://jellingfish-games.itch.io/mr-final-boss",
    "tech": [
      "unity",
      "csharp"
    ],
    "targets": [
      "windows",
      "html5"
    ],
    "images": [
      "thumbnail.png",
      "screenshot1.png",
      "screenshot2.png",
      "screenshot3.png",
      "screenshot4.png"
    ],
    "description": "The legends say that one day, brave Heroes will slay the evil and malicious Ignatius, the Chaos Bringer... But YOU won't go down without a fight! Be the bossfight everyone is dreading and hunt down as many Heroes as you can in your last stand using a variety of abilities you can choose from! <br />Game made in 72 hours for <a href=\"https://ldjam.com/events/ludum-dare/50\">Ludum Dare 50</a>, with the theme \"Delay the Inevitable\"."
  }
]
```

Since it's JSON, the string couldn't have line breaks, which is really just something I could
live with when the text was a short summary. This would just not work for blog posts. To actually
write blog posts, I wanted to use the beloved, old classic: Markdown. So I would basically have
two options: either have *another* preprocessing step when building the website, which would
require writing some more scripts and making the process of deployment more complicated. It would
also mean I would store all the content of all the blog posts in the code that gets served
to anyone who visits any page on the site, which just felt stupid, even if text is a fraction of
the size of a single image.

The alternative was serving markdown files in full, and processing them into HTML client-side.
Now, this is my personal website, a site serving probably an average of the 2 times a month I
visit it myself to show people. But it still felt like a really dumb way to do things. I'm sure
many sites do more intensive processing client-side, but I just couldn't think for a good reason
"*why?*"

To solve these issues, I would have to unavoidably write code. There were many options for what
paths I could take, such as rewriting my site in a Static Site Generator like
[Hugo](https://gohugo.io/), or writing a server in whatever of the countless options exist.
I didn't want to go the templating route. It felt really limiting after encountering JSX, and I
would have to rewrite my site inside-out, with a different approach. I could split my codebase in
half, keeping the React site as the front but making it actually do its job of requesting data
from the backend. I felt like doing it that way just for serving blog posts would grow the effort
required to change anything about the site yet again, which was something I really would rather
not do. The entire point is to be able to enjoy making this stuff.

### The LuaX revelation
Coming back to the beginning of the article, I watched a video of ThePrimagen reading a
fascinating blog post,
[I made JSX for Lua (because I hate static sites)](https://bvisness.me/luax) by Ben Visness.
He seemed to share my feeling about the approach to managing HTML, and how JSX was really
convenient. And his solution was simple, powerful, and perhaps most importantly, cool. Writing a
preprocessor to create a custom dialect of Lua. And he finished the blog post with a note of
encouragement:
> I don’t know what the future holds for LuaX. It’s not ready for other people to use, and I’m
> not sure it will ever be. So rather than tell you all to go to luax dot dev and start building
> your websites with my tool, here’s what I’ll say instead:
>
> Try building something for yourself. Try writing code for you, and you alone. Don’t worry about
> whether it will look good on your resumé or attract lots of stars on GitHub. Just write
> something that feels good to you. Explore a weird idea and see where it takes you.
>
> Who knows—maybe someday other people will like it too.

So I set out to recreate it. After all, I wanted my site to run on LuaX as well, and I wouldn't
be deterred by inconvenient facts such as the fact it doesn't really exist yet.

### Enter Reluax
I decided to name my version `reluax`, since it is a remake, and it was relaxing to write on the
side, procrastinating other responsibilities. I wrote the bulk of it in Rust, since I had a
experience writing a language in it from writing [brakion](https://github.com/Duckonaut/brakion),
and I could copy the lexer almost in full. Rust would also provide a good ecosystem for the
HTTP server portion, with battle-tested libraries like [hyper](https://hyper.rs/). I didn't go
for any of the higher-level libraries like [axum](https://github.com/tokio-rs/axum), since I
felt like I wouldn't really benefit from them. What I was building was not to be a layer on top
of one, but a replacement of it.

The parser portion took a bit, but it was not anything too complex. Writing a lexer that
simultaneously structures the data, but can emit whatever garbage comes inside of an HTML tag, was
a bit tricky. But in two evenings I had a demo:

![the first demo](https://cdn.duckonaut.dev/assets/blog/building-reluax/first-demo.png)

It was a bit rough, but proved it was all working. The next day I had something akin to React's
functional components:

![the second demo](https://cdn.duckonaut.dev/assets/blog/building-reluax/second-demo.png)

And on the third day, this site you're reading right now was running fully on Reluax. I've also
taken the extra time to add some nicer output to the program, just for fun.

![cli with emojis](https://cdn.duckonaut.dev/assets/blog/building-reluax/cli.png)

And of course, with making a custom dialect of Lua, I would throw away all the goodies that give
modern developers a good experience writing code, like syntax highlighting or a language server.
Not content with that, I threw together a tree-sitter parser to at least have syntax highlighting
back in my beloved Neovim. I've written a couple in the past, so adapting the
[tree-sitter-lua](https://github.com/tjdevries/tree-sitter-lua) grammar only took a cople hours.
The syntax highlighting of this blog is powered by tree-sitter, so you can enjoy a pretty
view of how the entry point of this website looks!

```
luax
local Common = require("common")
local Navbar = require("components.navbar")
local AnimatedBg = require("components.animated_bg")

local Home = require("pages.home")
local Projects = require("pages.projects")
local Games = require("pages.games")
local Contact = require("pages.contact")
local Blogpost = require("pages.blogpost")
local Blog = require("pages.blog")
local NotFound = require("not_found")

local blogposts = require("blog.posts")

math.randomseed(os.time())

local function wrap_component(component)
    return
    <Common>
        <Navbar />
        <div class="back-shadows"></div>
        <div id="app-main">
            {$ component $}
            <AnimatedBg />
        </div>
    </Common>
end

local function route(path)
    if path == '/' then
        return 200, wrap_component(<Home />)
    elseif path == '/projects' then
        return 200, wrap_component(<Projects />)
    elseif path == '/games' then
        return 200, wrap_component(<Games />)
    elseif path == '/contact' then
        return 200, wrap_component(<Contact />)
    elseif path == '/blog' then
        return 200, wrap_component(<Blog />)
    elseif reluax.url_matches('/blog/{slug}', path) then
      local slug = reluax.url_extract('/blog/{slug}', path).slug
      -- blogposts is a list of blogposts, with the slug a property of each
      local post = nil
      for _, p in ipairs(blogposts) do
        if p.slug == slug then
          post = p
          break
        end
      end
      if post then
        local article = wrap_component(<Blogpost post={post} />)
        return 200, article
      end
    end

    return 404, NotFound()
end

return {
    name = "duckonaut.dev",
    route = route
}
```

After that, I've taken some time to wrap Reluax in a Nix flake so I could easily run it on my
Oracle Cloud server, add some descriptions to the CLI help, things like that. And now I'm writing
this blog post, satisfied with how quickly it all came together.

Building things is fun! I highly recommend it. This project gave me a really fun distraction, and
now I have my site running on something I made, something I have full control over. That's a
really good feeling. And I won't end the article the same way as Ben: you can check out the early
version of Reluax over at [GitHub](https://github.com/Duckonaut/reluax) and try it for yourself.
