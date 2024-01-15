local md = require "libs.markdown"

local blog_cache = {}

local function get_blog_post_content(post)
  local slug = post.slug
  if blog_cache[slug] then
    return blog_cache[slug]
  end
  -- pull markdown content from file
  local content = io.open("blog/" .. slug .. ".md", "r"):read("*a")

  if content then
    -- convert markdown to html
    content = md(content)
  end

  blog_cache[slug] = content

  return content
end

return get_blog_post_content
