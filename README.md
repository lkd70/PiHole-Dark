# PiHole-Dark
A Dark theme for the pihole admin page.



----------

## Easy install

1. Download the [install.sh file](https://github.com/lkd70/PiHole-Dark/blob/master/install.sh) to this directory: `/var/www/html/`
2. open a terminal ( <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> )
3. type: `cd /var/www/html`
4. type: `sudo su` (type your password if promoted)
5. type: `chmod +x install.sh`
6. type: `./install.sh`
7. Follow the onscreen instructions

----------

## Credits

All credits to the origional creators of these files, I am meerly an editor.
All credits to the [Pi-Hole Team](https://pi-hole.net) for their great platform.

Do follow the individual licenses of these files as supplied by the authors.

Inspired by [this thread](https://discourse.pi-hole.net/t/dark-admin-theme/647/62).


----------

## Editing chart styles

To edit the style of the charts on the main dashboard, go to the file: /admin/scripts/pi-hole/js and edit the commented styling object on line 11. It's all quite self explanitory, though just test as you go, I doubt you'll break anything!

Default style object:

```var chartStyle = {
	queryOverTimeChart: {
		totalDNS: {
			backgroundColor:  "rgba(80,80,80,0.5)",
			borderColor:      "rgba(250, 40, 160,1)",
			pointBorderColor: "rgba(100,20,70,0.8)"
			},
		blockedDNS: {
			backgroundColor:  "rgba(230,160,10,0.5)",
            borderColor:      "rgba(240,80,40,1)",
            pointBorderColor: "rgba(90,15,15,0.8)"
                        }
	},
	queryTypeChart: {
		type: "doughnut", // 'pie' or 'doughnut'. 
		borderWidth: 3,
		borderColor: "rgb(33,33,33)",
		colours: ["rgb(50,160,135)","rgb(255,100,130)"]
	},
	forwardDestinationChart: {
		type: "doughnut", // 'pie' or 'doughnut'. 
		borderWidth: 3,
		borderColor: "rgb(33,33,33)",
		colours: ["rgb(150,20,150)","rgb(210,170,0)"]
	}
};```
