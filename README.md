# angular-bgjccx

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-bgjccx)

3/29/23

Angular Animations Import and Implementation:

- Let's knock this out so that we can debug it together. I am going to implement it and then add an example of an animation in the application. After that, look at their API and implement a different animation than I did. 

- First, I made alot of changes to this app. The way it was started was extremely basic. Typically angular applications will have an 'App' Component and be built out from there, so to make this consistent with other applications, I re-structured it to have one. The main.ts logic has now been added to the app component. 

- The app module is where I imported the Animations Module. I also implemented an example of an angular animations compnent called the open-close component. I have a link of the step by step that I did to accomplish this. 

Animations How-To
https://angular.io/guide/animations#getting-started

Homework! 

Create another component ( which you will have to manually add to the app-module as a declaration) and implement another angular animation on that component. You can see what I did with the open-close component and the link above will guide you through that example. 

Side Note: This may seem overwhelming (as far as the angular animations go) but I have no idea how to use them really. I just used their example on their site, and we rarely animate anything with the angular animations module directly. So don't be overwhelmed. Just follow the instructions, and if you have questions, let me know. Godspeed!

3/23/23

Variables, Constructors and Services Implementation

- In components, you can declare variables. The type of variable you declare and its security scope is dependent on where you want access to it. Once you declare a variable in a components controller (or ts file), you will set it to public or private, like so. private variableName: string = "Dylan". If you wanted that variable to be accessable in places outside of the controller (or ts file) such as the conponents template (or html file), you would have to declare it public instead of private.
- If I wanted a variable to be accessable in multiple places, a place to declare it may be in a service. In order to be able to access a service inside of a component, you have to declare it in the constructor of that component, like so. constructor (private dataService: DataService){}. In this example, private refers to its security scope, dataService is the name you want to be able to refer to it in the component, such as this.dataService, and DataService is the type of instance you are declaring. If you wanted to declare multiple service instances in a constructor, simply add a comma and keep going. Example here. constructor(private dataService: DataService, private utilityService: UtilityService){}.
- I am going to create a dataService and implement it. Since stackblitz doesn't have a terminal for angular component creation, simply rightclick in the filetree where you want a new service to be created, click Angular Generator and then click Service. Then name the service in the pop up dialog box and its created. I named it data, which will create a file named data.service.ts.
- Once created, we have to implement it in the application and declare it as a provider. I went to the main.ts file and created a providers array and declared the DataService in that array, and imported it at the top of the file so that it knew where DataService was coming from.

Homework! :D

Create a service called UtilityService, declare two variables in the service, one private and one public. List it in the list of providers and implement it in the constructor of the main.ts file and in the controller, try to refer to both variables (console.log(this.utilityService.variableName)). You will see the app will crash and say that you cant refer to a private variable name. Comment it out and it will work. Btw, this also works for functions as well, but we will get to that later.
