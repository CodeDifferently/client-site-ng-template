## About Our Client Project
* Client Project Has 3 Important Modules Core, App and Shared
	* `Core Module` - should contain _**singleton**_* services (which is usually the case), universal components and other features where there’s only once instance per application.
	* `App Module` - The Module that Bootstraps our application. Sets the ground rules for our applicaton(base routing, base layout, main imports)
	* `Shared Module` - This is the common ground for all components that you want to share between modules and other components


# Setting up client site project
-

* run command in your dev or sites directory in your terminal
	* `git clone https://github.com/CodeDifferently/client-site-ng-template.git your-client-name-here`
	* run command `npm install` afterwards to install any **_dependencies_*** that might have been added to the project so you can properly serve it
* When creating pages you want to make them into _**`Modules`**_*.  
	* create a module with: `ng g m pagename`
		* if you want to make that module in a folder you generate this 		module under the directory name. i.e. `ng g m foldername/pagename --routing`.

		* We add the `--routing` flag to each module for sub folders and **_lazy loading_***
* Adding dependencies through command line:
	* npm install *insert-package-name-here* in the root directory of your project. i.e bootstrap

#### Adding Bootstrap and NGX-bootstrap
##### Option 1
1. `npm install bootstrap jquery --save`
	* The JavaScript parts of `Bootstrap` are dependent on `jQuery`. So you need the `jQuery JavaScript` library file too.


3. Open **angular-cli.json** and insert a new entry for the bootstrap css into the _**styles**_ array, it should look like this.

	```json
	"styles": [
	"styles.css",
	"./node_modules/bootstrap/dist/css/bootstrap.min.css"
	],
	```
4. In the same **src/app/app.module.ts** look for the _**scripts**_ array and add your jquery and bootstrap js.
	
	```json
	"scripts": [
	"./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
	```
And *Wa-la* you can now use bootstrap as you would regularly.
	
##### Option 2

You can use NGX-Bootstrap and use just its very own prebuilt components and make your own css (Components Found here: [NgxWebsite](https://valor-software.com/ngx-bootstrap/) )

`npm install ngx-bootstrap bootstrap --save`

The reason for adding bootstrap install next to the ngx is because the ngx directives are built off of the bootstrap 4.

1. to add any ngx-bootstrap modules (i.e. alert module you would open **src/app/app.module.ts** and insert it like below ) 
	
	``` typescript
	import { AlertModule } from 'ngx-bootstrap';
	...
	@NgModule({
	...
	imports: [AlertModule.forRoot(), ... ],
	... 
	})
	```
2. Open **angular-cli.json** and just like before insert a new entry for the bootstrap css into the _**styles**_ array, it should look like this.

	```json
	"styles": [
	"styles.css",
	"../node_modules/bootstrap/dist/css/bootstrap.min.css"
	],
	```
	
	**OR** you can just add all three and use the most out of both `NGX-Bootstrap` and `Bootstrap 4` 
	
	
			
	
## FAQ
* What is a module?
	*  In Angular, a module is a mechanism to group components, 		directives, pipes and services that are related or  in short a 		package of all the things we want to put together
* What is lazy loading?
	* Helps us decrease the startup time.
* What is a dependency
	* A dependency is usually an external module/package that can be **imported** into your program so you can use its components and features
