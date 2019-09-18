## About Our Client Project
* Client Project Has 3 Important Modules Core, App and Shared
	* `Core Module` - should contain _**singleton**_* services (which is usually the case), universal components and other features where there’s only once instance per application.
	* `App Module` - The Module that Bootstraps our application. Sets the ground rules for our applicaton(base routing, base layout, main imports)
	* `Shared Module` - This is the common ground for all components that you want to share between modules and other components


# Part 1 - Setting up client site project
-

* run command in your dev or sites directory in your terminal
	* `git clone https://github.com/CodeDifferently/client-site-ng-template.git your-client-name-here`
	* run command `npm install` afterwards to install any **_dependencies_*** that might have been added to the project so you can properly serve it
* When creating pages you want to make them into _**`Modules`**_*.  
	* create a module with: `ng g m pagename`
		* if you want to make that module in a folder you generate this 		module under the directory name. i.e. `ng g m foldername/		pagename --routing`.

		* We add the `--routing` flag to each module for sub folders and **_lazy loading_***
			
	
## FAQ
* What is a module?
	*  In Angular, a module is a mechanism to group components, 		directives, pipes and services that are related or  in short a 		package of all the things we want to put together
* What is lazy loading?
	* Helps us decrease the startup time.
* What is a dependency
	* A dependency is usually an external module/package that can be **imported** into your program so you can use its components and features