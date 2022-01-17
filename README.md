# dd-menu-maker
Basic utility function that creates a simple drop down menu.

### Importing:
import createDdMenu from './node_modules/dd-menu-maker/.ddMenuMaker.js'

### Syntax:
createDdMenu(id, triggerElement, triggerEvent, listElement, itemToLinks, linksHref, ulTextAlign)

### Definition:
id = String. A unique identifier for your new drop down menu. <br />
triggerElement = Element. HTML element that will toggle your menu. Spawns the menu below it. <br />
triggerEvent = String. 'click', 'hover', or 'hoverclick' events that trigger your triggerElement. <br />
listElement = Element. HTML list(ul/ol) element that spawns below your triggerElement upon toggle. <br />
itemToLinks = Boolean. Whether or not you'd like to wrap your li's textContent inside an anchor. <br />
linksHref = Array. Your anchors' href attribute values. First li's href value would be equal to Array[0]. <br /> 
ulTextAlign = String. Expects CSS value for textAlign property (left = default, center, right, justify, etc.).




