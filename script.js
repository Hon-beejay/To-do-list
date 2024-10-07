const big = document.querySelector('.big');
const minor = document.querySelector('.minor');

big.addEventListener('click', function(){
    let small = document.createElement('div')
    let a = document.createElement('div')
    let b = document.createElement('div')
    let input = document.createElement('input')
    input.type = 'text'
    input.placeholder = "Enter task"
    let btn = document.createElement('button')
    btn.innerHTML = 'add'
    let save = document.createElement('img')
    save.src = 'save-icon-5.png'
    save.title = 'save'
    a.append(input, btn, save)
    a.className = 'a'
    b.className = 'b'
    b.id = 'editableDiv'
    // b.contentEditable = 'true'
    small.className = 'small'
    small.append (a,b)
    minor.append(small)


    // const cont = document.querySelector('.b')
    // const omar = document.querySelector('.omar')

    btn.addEventListener('click',function(){
        let box = document.createElement('div')
        let editbox = document.createElement('div')
        let ptag = document.createElement('p')
        let delet = document.createElement('img')
        let edit = document.createElement('img')
        
        ptag.innerText = input.value
        delet.src = 'delete.jpeg'
        edit.src = 'edit.png'
        box.className = 'data'

        editbox.append(delet)
        editbox.append(edit)

        box.append(ptag)
        box.append(editbox)
        b.append(box)
        
    
        // minor.append(cont)
        
        // conts.append(cont);
        // minor.append(conts);
        // small.append(box)

        // delete function
        delet.addEventListener('click',function(){
            box.remove()
        })

        //edit function
        edit.addEventListener('click',function(){
            input.value = ptag.innerText
            box.remove()
        })

        // save.addEventListener('click',submit)
        // function submit(g){
        //     g.preventDefault()

        //     const beejay = {
        //         name: input.value
        //     }

        //     localStorage.setItem('login',JSON.stringify(beejay));
        //     // box.remove()
        // }

        // b.append(box)
        // omar.append(box)
        
        input.value = ''

        save.addEventListener('click',function(){
            const content = b.innerText;
            
            localStorage.setItem('savedContent',JSON.stringify(content));
            b.contentEditable = 'false';
            alert('Content saved and editing disabled.');

            window.onload = function() {
                const savedContent = localStorage.getItem('savedContent');

                if (savedContent){
                    b.innerText = savedContent;
                    b.contentEditable = 'false';
                }
            };

            edit.style.display = 'none'

        });
    });
});
