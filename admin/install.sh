#!/bin/bash
while true; do
    read -p "Create a backup of the current files? (Y/n): " yn
    case $yn in
        [Yy]* ) 
			cp -f admin/scripts/pi-hole/js/index.js admin/scripts/pi-hole/js/index.bkp.js  # Backup JavaScript...
            cp -f admin/style/vendor/adminLTE.min.css admin/style/vendor/AdminLTE.min.bkp.css  # Backup StyleSheet...
            echo "Backup completed!"
			break ;;
        [Nn]* ) break;;
        * ) echo "Please answer Yes (y) or No (n).";;
    esac
done
while true; do
    read -p "Install LKD70's Dark Theme now? (Y/n): " yn
    case $yn in
        [Yy]* ) 
			git clone https://github.com/lkd70/PiHole-Dark.git temp
            rm -f admin/scripts/pi-hole/js/index.js
            cp temp/admin/scripts/pi-hole/js/index.js admin/scripts/pi-hole/js/index.js
            rm -f admin/style/vendor/AdminLTE.min.css
            cp temp/admin/style/vendor/AdminLTE.min.css admin/style/vendor/AdminLTE.min.css
            cp temp/admin/style/vendor/AdminLTE.css admin/style/vendor/AdminLTE.css
            cp temp/admin/img/back.png admin/img/back.png
			break;;
        [Nn]* ) break;;
        * ) echo "Please answer Yes (y) or No (n).";;
    esac
done
echo "All done!"
