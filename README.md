# Todo-tada 

## Project Description

To-do application made and designed by me.

Built with React and Redux.

- ADD : You can add new tasks with enter or clicking add btn(+)
- DONE : Simply check the boxes (once you checked, you can't edit or delete.)
- EDIT : Click above the task that you want to edit. After finishing, just click outside of the box.
- DELETE : Click delete btn(x)

Also, it's responsive.

## Project Screen Shot

![image](https://user-images.githubusercontent.com/78199999/190329332-1c8cabba-e283-4fa4-9602-b7bf9cb635da.png)


## Reflection

  - What was the context for this project?
  
    Side project
  - What did you set out to build?
  
    For practicing React.
  - Why was this project challenging and therefore a really good learning experience?
  
    The very first project that I made on my own with React and Redux.
    
    To embody function I want (modifying) I learned how to use useEffect and useState.
  - What were some unexpected obstacles?
    
    1. ```clickOutside``` function didn't work properly at the first time. So I added one more condition (``` && !contentsRef.current.contains(e.target) ```)
    
    2. Tried to fix error about toggle "isDone". Success sending ```data.isDone``` but it still makes error.
   
