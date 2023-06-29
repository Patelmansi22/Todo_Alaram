import React from 'react'
import "../styles/exp.css"
const Exp = () => {
    // $( document ).ready(function() {
  
    //     const $input = $('#new-task');
    //     const $todoTasksHolder = $('#todo-container');
        
    //     $input.focus();
       
    //     $input.on('keydown', function(event) {
      
    //       if (event.keyCode === 13 && $input.val() !== '') {
      
    //         const source = $('#todo-template').html();
    //         const todoContext = { label: $input.val() };
    //         const todoTemplate = Handlebars.compile(source);
    //         const html = todoTemplate(todoContext);
      
    //         $todoTasksHolder.prepend(html);
    //         bindEvents();
    //         $input.val('');
    //         if ( $('#todo-container').children().length > 0 ) {
    //           $('#tasks-body').slideDown();
    //         } 
    //       }
    //     });
        
    //     function dragAndDrop() {
    //      $('#todo-container li').draggable({
    //         helper: 'clone'
    //      });
    //      $('#todo-container li').droppable({
    //         drop: function(event, ui) {
    //             $(this).before(ui.draggable);
    //         }
    //      });
    //   }
    //   $(document).ready(dragAndDrop);
        
    //     const deleteItem = function() {
    //       $(this).parent().remove();
    //       todoCounter();
          
    //       if ( $('#todo-container').children().length === 0 ) {
    //          $('#tasks-body').slideUp();
    //       } 
    //     }
        
    
    //     const editItem = function(event) {
    //       const $li = $(this).parent();
    //       const $label = $li.find('label');
    //       const $inputText = $li.find('input[type=text]');
    //       const $containsClass = $li.hasClass('editMode');
      
    //       if ($containsClass) {
    //         $label.html( $inputText.val() );
    //       } else {
    //         $inputText.val( $label.html() );
    //       }
          
    //       $inputText.on('keydown', function(event) {
    //       if (event.keyCode === 13) {
    //          $li.removeClass('editMode');
    //          $inputText.blur();
    //          $label.text( $inputText.val() ); // update label text
    //       }
            
    //   });
          
    //     }

    //     $(document)
    //       .on('click', '.edit', function() {
    //         $(this).parent().toggleClass('editMode');      
    //       })
    //       .on('change', '.checkBox', function(event) {
    //         $(this).parent().toggleClass('completed');
    //       todoCounter();
    //       });
        
 
    //     function bindEvents() {
    //       $('.delete').on('click', deleteItem);
    //       $('.edit').on('click', editItem);
    //       todoCounter();
    //     }
        
  
    //     $('#newColor').on('click', function(event) {
    //         if (event.target.tagName === 'LI') {
    //             let $color = $(event.target).css('background-color');
      
    //         $(event.target).siblings().removeClass('selected');
    //         $(event.target).addClass('selected');
    //         $('#head').css('color', $color);
    //         $('.container').css('border-color', $color);
    //         $input.focus();
    //         $('.form-control:focus').css('border-color', $color);
    //         }
    //     });
      
 
    //     const todoWordPlurazile = (count, word) => {
    //       return count === 1 ? word : word + 's';
    //     }
      
        
    //     const todoCounter = function() {
    //       const footerSource = $("#footer-template").html();
    //       const footerTemplate = Handlebars.compile(footerSource);
    //       const activeTodos = $('#todo-container').children(':not(.completed)').length; 
    //       const footerContext = {
    //           activeTodoCount: activeTodos,
    //           activeTodoWord: todoWordPlurazile(activeTodos , 'item')
    //       };
    //       const html = footerTemplate(footerContext);
    //       return $("#activeTodo").html(html);
    //     }
        
        
    
    //     $('#todo-container').on('click', function() {
    //       if (event.target.tagName == 'BUTTON') {
    //         if (event.target.className == 'up') {
    //             let li = event.target.parentNode;
    //             let prevLi = li.previousElementSibling;
    //             let ul = li.parentNode;
    //             if (prevLi) {
    //               ul.insertBefore(li, prevLi);
    //             }
    //         }
    //         if (event.target.className == 'down') {
    //           let li = event.target.parentNode;
    //           let nextLi = li.nextElementSibling;
    //           let ul = li.parentNode;
    //           if (nextLi) {
    //             ul.insertBefore(li, nextLi.nextSibling);
    //           }
    //         }
    //       }
    //     });
    //   });

    const label = "mansi"
  return (
    <div>
    
    
<div id="newColor" class="text-center mt-3">
	<ul>
		<li class="firstColor selected"></li>
		<li class="secondColor"></li>
		<li class="thirdColor"></li>
	</ul>
</div>
		
<div class="container text-muted">
	<h2 id="head" class="display-3 text-center mb-5">todos</h2>
	<input class="form-control" id="new-task" type="text" placeholder="What needs to be done?"/>
	<div id="tasks-body">   
      <h3 id="doing" class="text-center">let's do this!</h3>
      <ul id="todo-container"></ul>  
		  <footer id='activeTodo'></footer>
  </div> 
</div>
<footer class="text-center"><p>&copy 2022</p></footer>

<script id="todo-template" type="text/x-handlebars-template">
  <li class="todoItem">
     <input type="checkbox" class="checkBox"/>
     <label>{{label}}</label>
     <input type="text" class="form-control"/>
     <button class="delete"></button>
     <button class="edit"></button>
     <button class="down"></button>
     <button class="up"></button>
  </li>
</script>
<script id="footer-template" type="text/x-handlebars-template">
	<span id="todo-count">You have: </span>
</script></div>
  )
}

export default Exp