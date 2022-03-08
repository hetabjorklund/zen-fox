# Zen Fox
Zen Fox is a mobile app that distracts you from your worries by offering you random floofy fox pictures from [Random Fox](https://randomfox.ca/floof/) and inspiring quotes from [Zen Quotes](https://zenquotes.io/).

## Home
From the Home view you can choose whether you want a new random fox picture or a new random Zen quote. If you are happy with the picture or quote, you can save it to a list, or if not, push the button again to get a new one. If saving the quote or picture succeeded, you get a confirmation with an [Alert](https://reactnative.dev/docs/alert).

## Saved quotes
The Saved quotes view uses [FlatList](https://reactnative.dev/docs/flatlist) and [ListItem from React Native Elements](https://reactnativeelements.com/docs/listitem) to show you the quotes you have saved. You can delete a quote by pressing the trash can icon next to it.

## Saved pictures
The Saved pictures view uses [FlatList](https://reactnative.dev/docs/flatlist) to show you the pictures you have saved. You can delete a picture by pressing the trash can icon next to it.

## Components used

The navigation between the Home, Saved quotes, and Saved pictures views is done using [Tab navigation](https://reactnavigation.org/docs/tab-based-navigation/).

The icons used in the navigation bar and the Delete button are from [Ionicons](https://ionic.io/ionicons).

The Save button uses the [Button component from React Native Elements](https://reactnativeelements.com/docs/button).

Saving quotes and pictures is done using [Firebase](https://firebase.google.com/).

The fox line art used in the splash screen and application icon is ["Fox Geometric Png Clipart"](https://www.pinclipart.com/pindetail/ibmoRTm_fox-geometric-png-clipart/). The splash screen and application icon are done using [Canva's](https://www.canva.com/) "Pink and Blue Lily Japanese Style Flowers" template by Helen Greenwood Creative.

## Creator
Heta Björklund
 * Github: https://github.com/hetabjorklund
 * LinkedIn: https://www.linkedin.com/in/heta-bjorklund
