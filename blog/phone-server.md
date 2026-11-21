## Why, what, where?
A couple years ago I became aware of Nura OS (previously known as PostmarketOS, in my opinion a more representative name).
There was a Linux distribution that was "supported" on a vast array of mobile devices? And it could just... work?

Of course not. The device support is incredibly spotty, with a planetary conjunction of requirements for a device to fully work. In no particular order:
- An unlocked/unlockable bootloader
- An SoC supported by the Linux kernel
- A device tree that can actually describe the device
- Drivers for every component of the device
- A maintainer, somewhere in the world, with the knowledge to assemble this together into a working sub-distribution, the device on hand, and lots of time.

Even with this list, there is still a surprisingly large number of supported devices. With the recent rebrand to Nura, the device support tiers have been
reorganized. There is no device that's considered worthy of the "Main" tier, which would mean "it just works". However, the Community and Testing tiers, which
pretty much mean "a close-to-mainline kernel and *enough* components working to do something useful" contain just about 400 devices. That's very impressive!

## The first adventure
At the time, I looked through the device list, and spotted a familiar name. A Google Nexus 7 tablet from 2012. I had one as teenager, and treasured it.
At some point, I left it on my desk and came back to see it on the ground with a shattered screen. The damage didn't look that bad, until I tried to use it.
The touchscreen completely broke, rendering it useless. It was a sad day. It was a couple years old at that point, hardware was improving fast, and with repair
being more expensive than it was worth, I put it in a sleeve and slid it into my drawer.

So when I learned I could give a second life to a device I completely wrote off, and haven't thought of in years, I was excited. The process to install it wasn't
too difficult, I just followed the wiki. Turns out, the Nura team started the project with this model as the first tablet, so it was pretty well supported by that
point.

At the time, not all of its components worked. For example, the Wi-Fi was broken, which meant for any network connectivity I needed to tether to a computer and use
USB internet. Not discouraged by that, I installed several graphic interfaces to try out on it. None of them really worked. They were all crazy slow, and with no
touchscreen, I knew this would be at best a smart display. But without hardware acceleration, the need for USB internet, and the puny 2 `armv7` cores with 1GB of RAM, I gave up on it.
No software I truly wanted to use would run on this thing.

## The next attempt
I had another device in the "old phones" drawer. A Xiaomi Redmi 4A. This one wasn't damaged, I just replaced it with a better model. It also showed up on the Nura
device list.

I was super optimistic going into this. This one had fully working hardware, with a 4-core `aarch64` SoC and 2GB of RAM. It could theoretically do *something*.

However, Xiaomi didn't want me to succeed. The process of unlocking the bootloader was insane. I spent weeks trying to get it working.
Not only was it super intrusive, requiring my phone number, a SIM card to be present in the device, and a week of waiting for some cloud keys, it also just straight up did not work.

In the end, I never managed to unlock it. Maybe if I went back now, with the knowledge and (slightly) better tools, I could do it. But it felt absolutely out of my control and I hated it.

## Third time's the charm?
A year later, the next contender showed up. My brother's Xiaomi Redmi Note 7. He upgraded to some new model, and left this one unused. After some time getting used to his new phone,
he said I could do whatever with the old one, so I went back to the Nura wiki and lo and behold, it was there, in the "Testing" support tier again.

With an **8-core** `aarch64` SoC with 4GB of RAM, this was technically more capable in some ways than the server running the website you're reading this on:
a forever-free tier Oracle Cloud VPS, with 2 `x86_64` cores and 1GB of RAM. The Note 7 was also already made during the "diminishing returns" of phone performance. The pace of hardware
development slowed down enough that it could theoretically run some modern software.

I did not want to waste this. I once again went into the Xiaomi bootloader unlocking mines. There was an unofficial way available on this one, which was very enticing, but ultimately
did not work for me. I had to wait the ~~week~~ **2 weeks** (thanks Xiaomi, you made the unlock wait time twice as long since I last tried it!). I was going on a vacation soon,
so I just left it linked to the Xiaomi account at that point and waited. Miraculously, it *worked*. I had a modern device with an unlocked bootloader!

## Setting up Nura
With an unlocked device in the Testing support tier, I was ready to install Nura. The process was weird, but not too difficult. The `pmbootstrap` tool walks you through the basic steps, like
a username, a hostname (I chose `rem`) and some initial packages. Then it builds a series of images you can flash to the device.

I ran into only one issue - the touchscreen. Turns out, the Redmi Note 7 shipped with three different display panel/touchscreen combinations. Turns out I got unlucky and my device had
a BOE panel with a touchscreen that lacked open-source drivers, and as a result did not work.

Nura OS is based on Alpine Linux, a very minimal Linux distribution. It uses `musl` as the `libc`, BusyBox for coreutils and OpenRC for the init system. These are all "smaller and simpler"
alternatives to core components you will find on mainstream distributions, and are a bit more limited in support. You can *technically* choose your init system on Nura between OpenRC and
SystemD but since OpenRC seems to be more supported I just stuck to it.

Despite these less-common core components, the Nura repositories (and upstream Alpine repositories) were full of packages. Anything I really wanted to use was there, so it was time to actually
make the phone a server.

Because of the touchscreen problem from before, I chose to have no graphical interface. I was mostly interested in running this as a server, and wouldn't be able to use it anyway.
This meant that I had to connect to the device from my computer to do anything on it. Luckily, on initial installation, Nura has a running SSH daemon and USB internet to whatever device
you connect it to.

## Networking
As soon as I connected to it, I found a working NetworkManager. It connected to my Wi-Fi with no major issues initially, but looking over the Nura wiki again, there is just one tiny issue:
the driver for the modem in this specific device crashes in an unrecoverable way if the Wi-Fi disconnects. Well, I can't do anything about it so I set up a service to reboot the device if
it loses network connection for a significant amount of time. I have yet to check whether ethernet over USB through a hub of some sort works on it, but seeing the "USB OTG: Broken" line in the
device wiki, I am not holding my breath.

I really wanted a way to access this device from more than just my local Wi-Fi. Fortunately, these days we have [Tailscale](https://tailscale.com/). I could connect it to my tailnet, a secure
peer-to-peer subnetwork that's available on top of normal internet. I already used Tailscale for my NAS, and had my regular phone, laptop, etc. registered onto the tailnet, so connecting this would
allow me access from wherever I wished.

Then, I had an epiphany. What if, actually, I could let anyone access this server this way?

I connected the forever-free Oracle Cloud VPS (`glint`) that's been running this website for the past 3 years to the tailnet. This opened up an interesting possibility. Someone outside of my tailnet could not
access `rem` directly. This was good, because even with my common-sense efforts to secure it (no password authenticated SSH and a firewall) I knew it would likely be risky to expose it to the open
internet. Just the week before, the [sshhole](https://sshhole.com/) vulnerability was discovered, affecting Alpine Linux systems. Fortunately my Nura installation was unaffected, but who knows what
else is out there.

But since I already had a public HTTP server, I could reverse proxy to my phone from it through the tailnet. This is how [rem.duckonaut.dev](https://rem.duckonaut.dev) came to be. When `glint` receives
a request from anywhere in the world to that domain, it proxies it to `rem` and responds with whatever it responded with.

This was the point I started to feel empowered. It may not look like much from the outside - a slow HTTP server responding with a greeting page. But underneath, it was doing so much. I didn't even mention that
`rem` was running [reluax](https://duckonaut.dev/blog/building-reluax), a web framework I built years ago. And all the pieces of hard work came together for that one page. I felt like I could do anything.

## Git server
Recently, I've been really fed up with GitHub. Ever since Microsoft acquired it, it's gotten worse and worse over time in every concievable way. Half the time, browsing repository source files doesn't even load
correctly these days, and the entire homepage is a huge AI chat window that I will never use. Hosting code repositories seems to be an afterthought for them now, and I absolutely hate it.

I decided that it's about time I actually move away from it. My usage of GitHub was always pretty limited in scope. I wanted a place to host a git server that was accessible. Most of my projects weren't made with the
intent of taking off, so I didn't really need to use the collaborative features. I didn't run CI for most of them either. I could migrate to a big Git-based software forge instance.
[Forgejo](https://forgejo.org/) and [sourcehut](https://sourcehut.org) seem like the best choices right now, with [Codeberg](https://codeberg.org) and [sr.ht](https://sr.ht) the biggest public instances of each.
Self-hosting a forge like that as a single person seems like a huge waste of resources and overengineering a solution, so while I will ultimately host a couple big projects on Codeberg, my small ones, and especially my
private repos, don't need to be there.

That's why they will exist on `rem`.

### Setting up Gitolite & cgit
[Gitolite](https://gitolite.com/) is a service that manages authorization to a central git server over SSH, with a lot of access control and access only through a single Linux user. I only want to access my repos
myself from multiple machines, so I don't need to expose the SSH port outside my tailnet. Setting it up was very simple, since it just exists in Alpine Linux repos. The [guide](https://gitolite.com/gitolite/quick_install.html)
was very quick and I soon started pushing existing repos to the server.

A web interface is also a nice-to-have. I've seen [cgit](https://git.zx2c4.com/cgit/about/) deployed in a couple places, and it seems to have just about everything I need from a web interface. It was also helpfully provided in
the Alpine Linux packages, though it took some more work to get working. I tried for a long time to have automatic repository detection but gave up on that, and listed everything by hand. That may be for the better since
I don't want every repository accessible through the web anyway.

I set up a reverse proxy as described earlier, put it behind [Anubis](https://anubis.techaro.lol/) just to make sure I don't get slammed with requests, and exposed it at [git.duckonaut.dev](https://git.duckonaut.dev).
I had some fun styling it with CSS to match the look of my website, and it's now live!

I also made sure to setup a simple backup solution for the Git repositories to my NAS, so I can feel a bit safer about it.

## Conclusions
This was a long journey and it's not over yet. There might be some more services I'd like to set up on this thing, maybe use its screen? I am also looking into learning kernel programming to hopefully add support for
some of the missing features in the phone (fix the modem crashing? allow USB OTG so I can run it connected to the Ethernet?).

Overall, as much as I am proud of myself for saving a piece of hardware from the e-waste bin and giving it something truly useful to do, I am also deeply disappointed in the entire state of technology. People throw away these
insanely powerful devices for the slightest issue. And no wonder - hardware manufacturers want you to buy new products. That's why they make repair more difficult, lock down bootloaders so these devices can't be repurposed,
The idea that I need to connect to a remote server of some giant corporation that will have to decide to allow me to unlock my bootloader is absurd.

I am not sure what to do about this yet. In the future, I want to pay attention to these things more when I am buying new hardware.
I might become the person that pays a premium for things like open firmware. Buy Framework laptops, Fairphones etc. But using the devices we have for longer, and repairing them as much as possible is the easiest and most
responsible choice.
