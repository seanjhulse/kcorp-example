# Example

## Styling

Notice `App.css` is using Flexbox. Flexbox is a very useful tool in CSS that helps to design layouts. Flexbox is slowly
being replaced by CSS grid, but it's still popular. 

When you define a `div` as a `display: flex` that doesn't do anything to the `div`. Instead, it changes the way its
*children* are laid out. A *parent* with a `display: flex` will have children that layout in a grid pattern
left-to-right by default. If you set the children div widths, they will honor the width in the flex layout. Two children
with `width: 50%` will each share 50% of the parent's width; see example below: 

```HTML
<div style="display: flex">
    <div style="width: 50%">
        hello.
    </div>
    <div style="width: 50%">
        world.
    </div>
</div>
```

In the example app, the sidebar has a width of 33% and the main body has a width of 66%.

When building websites, it's often easy to try and visualize them as grids. Try to split everything up into grids. Then
inside each grid, split them up again. Keep splitting them up until you get your smallest component. 

In your screenshot you sent, there is one top-level grid. A sidebar and a main page. Two components side by side. In
your "main page" there is another grid. A video with a caption box on the right. Again, that means you have two
components side by side so they are a grid *inside* the main page component. Much like a Russian nesting doll, you'll
need to design your webpage as a grid of grids.

## Components

Here is a basic component:

```JS
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      
    </div>
  );
}

export default Sidebar;
```

Components can just be plain HTML. Why use a component? They can be reused. You can duplicate code in HTML without
having to write it multiple times.

```JS
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Sidebar />
      <Sidebar />
    </div>
  );
}
```

That code above would create three sidebars but I only had to write one sidebar class.

