# dd-menu-maker
Basic utility function that creates a simple drop down menu.

Importing:
import createDdMenu from './node_modules/dd-menu-maker/.ddMenuMaker.js'

Syntax:
createDdMenu(id, triggerElement, triggerEvent, listElement, itemToLinks, linksHref, ulTextAlign)

id = String. A unique identifier for your new drop down menu.

triggerElement = Element. HTML element that will toggle your menu. Spawns the menu below it.

triggerEvent = String. 'click', 'hover', or 'hoverclick' events that trigger your triggerElement.

listElement = Element. HTML list(ul/ol) element that spawns below your triggerElement upon toggle.

itemToLinks = Boolean. Whether or not you'd like to wrap your li's textContent inside an anchor.

linksHref = Array. Your anchors' href attribute values. First li's href value would be equal to Array[0]. 

ulTextAlign = String. Expects CSS value for textAlign property (left = default, center, right, justify, etc.).




