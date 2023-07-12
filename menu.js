
    /* To begin, i created two classes for my menu, Employee and Branch. The employee class includes the name, title, 
    and branch assigned to the employee. The branch class includes the branches name, as well as an array of eployees at the branch. 
     */


class Employee {
    constructor (name, title, branch) {
        this.name = name;
        this.title = title;
        this.branch = branch
    }
    
    }

class Branch {
    constructor (name) {
        this.name = name;
        this.employees = [];
    }

    // When we add an employee, for each instance of the Employee the input will push a new employee to the array of employees.

    addEmployee (employee) {
        if (employee instanceof Employee) {
            this.employees.push();
        } 
    }

    }

    /* The menu class contains all of the contents of the menu we are building. We set the branches to an array as they will need to be 
    input. The selectedBranch is set to null as it currently has no value. The value will be added by the user. 
    */

class Menu {
    constructor () {
        this.branches = [];
        this.selectedBranch = null;
    }
    
    /* Start will initialize the menu we set selection to showMainMenuOptions. Using a switch statement that will operate so long as the input 
    is not 0. We assigned four actions within this menu, createBranch, viewBranch, deleteBranch, and displayBranch, which will show all branches.
    The defualt switch statement will exit out of the menu.
    After the switch statement we set selection to return to the showMainMenu options. If the user is finsihed it will send a 'Take Care!' alert.
    
    */

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createBranch();
                    break;
                case '2':
                    this.viewBranch();
                    break;
                case '3':
                    this.deleteBranch();
                    break;
                case '4':
                    this.displayBranch();
                    break;
                default:
                    selection = 0;
            }
          
            selection = this.showMainMenuOptions();
        }
       
        alert ('Take care!');
    }

    /* within the showMenuOptions method, a prompt will be returned with an index of the switch statement cases we set above.
    Below it we set the showBranchMenu method to contain the branch info which will prompt an index of the employee switch cases set
    further into the code. After the employee information is input it will be displayed under the branch information.
    */
    
    showMainMenuOptions() {
        return prompt (`
            0) exit
            1) create new branch
            2) view branch
            3) delete branch
            4) display all branches
        `);
    }

    showBranchMenuOptions(branchInfo) {
        return prompt (`
            0) back
            1) create employee
            2) delete employee
            -------------------
            ${branchInfo}
        `);
    }

    /* The implementation of the menu indexes is carried out in the following code, displayBranch, createBranch, viewBranch,
    deleteBranch, createEmployee, and deleteEmployee. 
    
    Within the displayBranch function a for loop is run to iterate through the input branch.
    when it is printed with the alert it will display the index of the branch concatenated with the input branch name for each branch. 
    */


     displayBranch() {
        let branchString = '';
        for (let i = 0; i < this.branches.length; i++) {
            branchString += i + ') ' + this.branches[i].name + '\n';
        }
        alert (branchString);
     }

     // With the createBranch function, we use the push method of the array of branches to print out the input branch name.


     createBranch() {
        let name = prompt ('Enter name of new branch:');
        this.branches.push(new Branch(name));
     }

     /*  With the viewBranch function we are prompting the user to input the index of the branch they want to view and the conditional statement 
    validates the user input. We then set the selected branch to the index that is input by the user. We then concatenate the selected branches
    name.

    We add the ability to add an employee with a for loop based on user input and concatenate it. The switch statement lets the user
    select either 1, to create and employee, or 2, delete an employee.
     */
     
     viewBranch() {
        let index = prompt ('Enter index of branch you wish to view:');
        if (index > -1 && index < this.branches.length) {
            this.selectedBranch = this.branches[index];
            let description = 'Branch name: ' + this.selectedBranch.name + '\n';

            for (let i = 0; i < this.selectedBranch.employees.length; i++) {
                description = i + ') ' + this.selectedBranch.employees[i].name
                 + ' - ' + this.selectedBranch.employees[i].title + '\n';
            }

            let selection = this.showBranchMenuOptions(description);
            switch(selection) { 
                case '1':
                    this.createEmployee();
                    break;
                case '2':
                    this.deleteEmployee();
                    break;
            }
         }
     }
 
     /* To delete a branch we prompt the user to type in the index of the branch they want to delete and use a conditional to validate
     the user input and then use the splice method to reduce the array of the index by 1.
     */

     deleteBranch() {
        let index = prompt('Enter the index of the branch you would like to delete:');
        if (index > -1 && index < this.branches.length) {
            this.branches.splice(index,1);
        }
     }

     /* To create an employee we promt the user to create a name and a title for the employee and push the user input to the array of
     employees with both their name and title.
     */

     createEmployee() {
        let name = prompt('Enter name for new employee:');
        let title = prompt('Enter job title for new employee:');
        this.selectedBranch.employees.push(new Employee(name, title));
     }

     /* To delete an employee we prompt the user to enter the index of the employee they wish to delete, validate their input, 
     and splice the employee based on its index by 1.
     */


     deleteEmployee() {
        let index = prompt('Enter the index of the employee you would like to delete:')
        if (index > -1 && index < this.selectedBranch.employees.length) {
            this.selectedBranch.employees.splice(index,1);
        }
     }
}

// We initialize the new menu by declaring it and using .start() 

let menu = new Menu();
menu.start();