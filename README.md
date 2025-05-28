# Angular In UXP

This repo contains a working example of running Angular in UXP.

## Motivation

The beautiful thing about the web is its diversity in libraries and frameworks and yet unity under web standards. The older CEP extensions
made far better use of this unity, as it just ran a web browser for each extension. On top of that, CEP supported a node engine, so the
deficiencies in the browser could be made up for by running in node.

The move to UXP meant many questions marks about compatibility, least of which were questions about library and framework compatibility.
Adobe seems to only officially support using vanilla JS and React. I've seen other project support Svelte and Vue (looking at you bolt),
but I had yet seen support for Angular (which is arguably the 2nd most popular framework). I saw no reason why it shouldn't work, so I
decided to lay some ground work to seek out feasibility, and the results came back great!

For those who might be new to Angular specifically, here are the main things I prefer about Angular (specifically when compared to React):
- **Stronger separation of html, scss, and ts**: This allows for much easier parallel development across large teams.
- **View encapsulation**: This ensures styles do no collide across different components.
- **Strong Opinions**: Angular has a very, well, Angular way to do everything. At first this might seem like a downside, but I have found its actually very helpful in orienting a developer when jumping into a new project.
- **Easy to make libraries**: As shown later in this demo, its really easy to separate a component library. I have found Angular to be my preferred platform for sharing code.
- **Fast Builds** Thanks to the Angular compiler, my build times, even for complex apps, are super fast.

If you work on a team and want to share code across multiple applications, I would strongly recommend Angular.

## Important Information

This repository contains multiple branches, each created to show off certain feature of Angular supported in UXP. This is included but not limited to:
- Modules
- Components (Standalone and Modules)
- Directives
- Services
- Environments
- SCSS support

It is recommended that you visit the branches in the following order:
1. example-bare-bones
2. example-application-with-components-directives-and-services
3. example-application-with-environments
4. example-separate-component-library

### Limitations

#### Router

Given current UXP implementation, the Angular Router does NOT work. This makes sense as there isn't a need to load a plugin at
a particular route. Instead, you could attempt to implement your own router, or you could just use conditional rendering.

#### Adobe Spectrum Web Components

These components have React wrappers, but I am yet to really attempt to get them working in Angular. I have found maintaining my own
component library gives me the control I actually need to fulfill customer requirements. If someone gets a working example of this please
reach out.

#### Typescript

This is not an actual limitation, but it is a major complication for any UXP project. In this demo we include the DOM in the tsconfig.
This is not actually accurate as the UXP DOM differs from the web standard DOM. Making this solution more robust would mean writing
your own, or included previously written typescript definitions for UXP. There is limited support for this in a few places online, but
the only real solution is to maintain your own typescript definitions.

## Getting started

Select a branch to get started!

## Authors

- **Jeremiah Lynn** ( [github](https://github.com/jeremiahlynn) )
