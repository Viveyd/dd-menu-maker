// Module takes trigger element(button, a, etc..) and list element(ul, ol)
// and returns a drop down menu div toggleable by trigger element event (click, hover, hoverclick)

export default function createDdMenu(
  // id = 'dd-menu',
  id = '',
  triggerElement, 
  triggerEvent = 'click', 
  listElement,
  itemsToLinks = false,
  linkHrefs = [],
  ulTextAlign = 'left') {
  
  // If no ID is given or the typeof ID === 'number'
  // return error
  if(id == '' || isNaN(id.slice(0, 1)) === false){
    return (()=> console.error('Invalid ID argument!'))();
  } 
  
  // Get the node where the drop-down menu will later be appended to 
  let ddMenuLocation = listElement.parentNode;

  // Create new div container for list element
  let ddMenu = document.createElement('div');
  ddMenu.id = id + '-menu';
  
  ddMenu.style.position = 'absolute';
  ddMenu.style.display= 'none';
  ddMenu.style.backgroundColor = 'white';
  ddMenu.style.width = 'min-content';
  ddMenu.style.top = `${triggerElement.offsetTop}px`;
  ddMenu.style.marginTop = triggerElement.offsetHeight + 'px';
  ddMenu.style.left = `${triggerElement.offsetLeft}px`;
  
  // Edit list element items
   listElement.id = `${id}-menu-list`;

  // Give list items a class name
  [... listElement.querySelectorAll('li')].forEach((item) => {
    item.classList.add(`${id}-menu-items`);
    item.style.marginBottom = '10px';
  });

  // If itemsToLinks === true
  if(itemsToLinks === true){
    let items = listElement.querySelectorAll('li');
    for(let i = 0, item, href, link; i < items.length; i++){
      item = items[i];
      href = linkHrefs[i]
      link = document.createElement('a');
      link.textContent = item.textContent;
      link.href = (href != null) ? href: '';
      link.style.color = 'black';
      link.style.textDecoration = 'none';
      item.textContent = '';
      item.appendChild(link);
    }
  }
  listElement.style.listStyleType= 'none';
  listElement.style.padding= '0px';
  listElement.style.width = triggerElement.style.width;
  listElement.style.textAlign = ulTextAlign;
  ddMenu.appendChild(listElement);

  const toggleState = function toggleState(){
    ddMenu.style.display = (ddMenu.style.display == 'none') ? 'block': 'none';
  }
  // Attach an event listener to the trigger element for toggling display state.
  //'hover' or 'hoverclick' triggerEvent
  if(triggerEvent === 'hover' || triggerEvent === 'hoverclick'){
    // Create new container to contain triggerElement and listElement
    // specific to hover or hoverclick trigger event
    let triggerMenuCon = document.createElement('div');
    triggerMenuCon.style.width = 'min-content';
    triggerElement.parentNode.insertBefore(triggerMenuCon, triggerElement);
    triggerMenuCon.appendChild(triggerElement);
    triggerMenuCon.appendChild(ddMenu)
    // Toggle display state according to triggerEvent
    if(triggerEvent === 'hover'){
      triggerMenuCon.addEventListener('mouseover', toggleState);
      triggerMenuCon.addEventListener('mouseout', toggleState);
    } else {
      triggerElement.addEventListener('click', () => {
        let state = triggerMenuCon.getAttribute('data-state');
        if (state === null || state === 'toggled-off') {
          ddMenu.style.display = 'block';
          triggerMenuCon.setAttribute('data-state', 'toggled-on');
        } else if (state === 'toggled-on') {
          ddMenu.style.display = 'none';
          triggerMenuCon.setAttribute('data-state', 'toggled-off');
        } 
      });
      triggerMenuCon.addEventListener('mouseover', () => {
        let state = triggerMenuCon.getAttribute('data-state');
        if (state === null || state === 'toggled-off') {
          ddMenu.style.display = 'block';
        }
      });
      triggerMenuCon.addEventListener('mouseout', () => {
        let state = triggerMenuCon.getAttribute('data-state');
        if (state === null || state === 'toggled-off') {
          ddMenu.style.display = 'none';
        }
      });
    }
  // 'click' triggerEvent
  } else if (triggerEvent === 'click') {
    triggerElement.addEventListener(triggerEvent, toggleState);
    // Append new drop-down menu to the parent of listElement
    ddMenuLocation.appendChild(ddMenu);
  } else return console.error(`Trigger event ${triggerEvent} is not a valid event`);

  
}