# Swedish Pollen Raycast Script Command

These are two Script Commands for [Raycast](https://www.raycast.com/), getting data from [The Swedish Museum of Natural History's Pollen Report](https://pollenrapporten.se/) through their open API.

## Variants

- `pollenkollen-hassel.js` shows the current levels of a single pollen (by default Hazel) inline
- `pollenkollen-full.js` shows the current levels for all reported pollens

## Install and use

1. If this is your first Script Command, create a folder for your scripts and add that as a script folder in Raycast (under Extensions in Raycast settings).
1. Download the script variant you want to that folder
1. Look through the code to see I'm not scamming you
1. Edit the script with the wanted reporting region, you can find the region IDs on `https://api.pollenrapporten.se/v1/regions`
   1. If you selected the single pollen script, edit the script with the wanted pollen id, you can find the pollen IDs on `https://api.pollenrapporten.se/v1/pollen-types`.
   1. If you selected the single pollen script, update the script name to match your selected pollen
1. Perform the command in Raycast, the result will be shown either inline next to the command (for a single pollen), or as a full result.
1. Take your anti histamines.
