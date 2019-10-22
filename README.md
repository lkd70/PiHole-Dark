# PiHole-Dark
A Dark theme for the PiHole admin page. (Now FTL compatible)

![Example dashboard](https://raw.githubusercontent.com/lkd70/PiHole-Dark/master/docs/example.png)


----------

## Easy install

### Dark Theme

1. open a terminal (or SSH if you're remoting in) ( <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> )
2. Type: `cd /var/www/html/`
3. Type: `sudo wget https://raw.githubusercontent.com/lkd70/PiHole-Dark/master/install.sh`
4. Type: `sudo chmod +x install.sh`
5. Type: `sudo ./install.sh`
6. Follow the onscreen instructions!

### Black Theme


1. open a terminal (or SSH if you're remoting in) ( <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> )
2. Type: `cd /var/www/html/`
3. Type: `sudo wget https://raw.githubusercontent.com/lkd70/PiHole-Dark/master/install_black.sh`
4. Type: `sudo chmod +x install_black.sh`
5. Type: `sudo ./install_black.sh`
6. Follow the onscreen instructions!

----------

## Easy Uninstall

Not a fan of the style? Sorry to hear, please feel free to leave some feedback on the [Official Thread](https://discourse.pi-hole.net/t/dark-admin-dashboard/). Sadly this theme isn't for everyone, so here's a simple method to restore the origional beauty of PiHole:

1. open a terminal (or SSH if you're remoting in) ( <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> )
2. Type: `cd /var/www/html/admin/`
3. Type `git reset --hard`
4. Go [leave some feedback](https://discourse.pi-hole.net/t/dark-admin-dashboard/) so we know what you didn't like!

----------

## Suggestion?

Something you'd like to see? Or maybe there's an incompatibility with a newer version of pi-hole? Please open an issue or make a pull request!

----------

## FAQ

### Q: Yuck! Why is the background still white??!? How could you do this to me?
First of all, I'd like to say sorry for your eyes, I'm sure they hurt the way mine did upon first seeing that sight.
Let's look at two possible solutions to this.
#### 1. Create your own pretty background image! (or grabbing one from a background tile/pattern website)
You can easily replace the ugly image in `/var/www/html/admin/img/boxed-bg.jpg` with a pretty dark one.
#### 2. To hell with the box! View the website without the 4:3 boxed view.
You can change to a wide-view from the admin website by navigating to: `Settings -> API / Web Interface -> Web interface settings` and un-checking the `Use boxed layout` option.

### Q: I've installed the theme and nothing has changed? Is this a scam? I want my money back!
Refunds cost $1 each, please contact me at `totallylegitemail@contact.com`

(Have you tried refreshing your browsers cache? Chances are it's still grabbing the old files)

----------

## Credits

All credits to the original creators of these files, I am merely an editor.
All credits to the [Pi-Hole Team](https://pi-hole.net) for their great platform.

Do follow the individual licenses of these files as supplied by the authors.

Inspired by [this thread](https://discourse.pi-hole.net/t/dark-admin-theme/647/62).

Thanks to [deathbybandaid](https://discourse.pi-hole.net/u/deathbybandaid) for the new easy install method!
