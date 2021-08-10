(function () {
    let itemsContainer = document.querySelector('.our-works__container');
    let addMoreItemsBtn = document.querySelector('.add-works-btn span');
    let items = [
        {
            url:'https://images.unsplash.com/photo-1627751507193-2f4320441958?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
            text:'Some Text.'
        },
        {
            url:'https://images.unsplash.com/photo-1627734450717-ce6149030d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            text:'Dolor Sit Amet'
        },
        {
            url:'https://images.unsplash.com/photo-1627751507193-2f4320441958?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
            text:'Lorem Ipsum.'
        },
        {
            url:'https://images.unsplash.com/photo-1627734450717-ce6149030d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            text:'Some Text.'
        },
        {
            url:'https://images.unsplash.com/photo-1627751507193-2f4320441958?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
            text:'Dolor Sit Amet'
        },
        {
            url:'https://images.unsplash.com/photo-1627734450717-ce6149030d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            text:'Lorem Ipsum.'
        },
        {
            url:'https://images.unsplash.com/photo-1627751507193-2f4320441958?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
            text:'Some Text.'
        },
        {
            url:'https://images.unsplash.com/photo-1627544078619-22c857508783?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            text:'Dolor Sit Amet'
        },
        {
            url:'https://images.unsplash.com/photo-1627697856180-3f021b84a16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            text:'Lorem Ipsum.'
        },
        {
            url:'https://images.unsplash.com/photo-1627751507193-2f4320441958?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
            text:'Some Text.'
        },
    ];

    let startElemIndex = 0;
    let endElemIndex;

    // add items page onload
    window.addEventListener('load' , () => {drawItems(0,6)});

    function drawItems(firstItemIndex, lastItemIndex) {
        
        for (let i = firstItemIndex; i < lastItemIndex; i++) {
            // if there is no more items return
            if (i == items.length) {
                addMoreItemsBtn.hidden = true;

                break;
            }

            // draw item
            let newItem = `
            <div class='col-sm-6 col-xs-12 col-lg-4'>
                <div class='our-works__item'>
                    <img src='${items[i].url}' alt=''>
                    <span>${items[i].text}</span>
                </div>
            </div>
            `;

            // add item
            itemsContainer.innerHTML += newItem;

            // set new value to variables
            startElemIndex = firstItemIndex;
            endElemIndex = lastItemIndex
        }

        VanillaTilt.init(document.querySelectorAll(".our-works__item"), {
            max: 10,
            speed: 400,
            glare:true,
            'max-glare':.4,
        });
    }

    addMoreItemsBtn.addEventListener('click' , ()=> {drawItems(endElemIndex, endElemIndex + 3)})
})();