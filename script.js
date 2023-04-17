var ul = document.getElementById('lista')

    var arr = JSON.parse(localStorage.getItem('lista')) || []

    function addProduto(){
      var produto = document.getElementById('produto')

      if (produto.value !== '') {
        arr.push(produto.value)
        localStorage.setItem('lista', JSON.stringify(arr))
        renderList()
        produto.value = ''
        produto.focus()
      }
    }

    function deleteItem(index){
      arr.splice(index, 1)
      localStorage.setItem('lista', JSON.stringify(arr))
      renderList()
    }

    function renderList(){
      ul.innerHTML = ''
      for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li')
        li.innerText = arr[i]
        li.setAttribute('class', `class${i}`)
        li.setAttribute('id', `but${i}`)

        let del = document.createElement('button')
        del.innerText = "Apagar"
        del.setAttribute('class', `class${i}`)
        del.setAttribute('class', 'apagar')
        del.setAttribute('id', `botao${i}`)
        del.addEventListener('click', function() {
          deleteItem(i)
        })

        li.appendChild(del)
        ul.appendChild(li)
      }
    }

    renderList()