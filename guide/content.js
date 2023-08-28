const content = () => {
  const sections = [{ 
    title: "Introduction",
    body: [{ 
      texts: [
        "**Nick-Knack** is a handover system, currently being piloted in Arnold Lodge.",
        "It is a digital platform to support the process of a safe handover. It is **NOT** a replacement to Rio, the Trust's record system.",
        "Much like any other record system, it is only as up to date as the last time it was updated."
      ]
    }]
  }, {
    title: "Accessing Nick-Knack",
    body: [{
      texts: [
        "Nick-Knack can be accessed in the `Handover` folder in the `AL Electronic Filing Tray`",
        "Double click the `Nick-Knack` icon to launch the app."
      ], img: {src: "./guide/launchIcon.jpg", class: "launch-icon"}
    }, {
      texts: [
        "In the Welcome screen read the notice and click `Login`.",
        "If you have not logged in before, you will be asked for your `Role` and `Default Ward`.",
        "If you have logged in before, you will be taken to your default ward."
      ]
    }]
  }, {
    title: "List View",
    body: [{
      texts: [
        "The first `View` you will be presented with is a list of the patients on a ward."
      ], img: { src: "./guide/temp-screen.jpg", class: "screenshot"}
    }, {
      texts: [
        "Above the list, you will find options for filtering. The main lists are `Patients` and `Tasks`.",
        "After selecting a list, you can filter further by `Ward` and other attributes."
      ], img: { src: "./guide/launchIcon.jpg", class: "screenshot"}
    }, {
      texts: [
        "Double click on a patient's name to open a detailed view of the `patient`.",
        "Double click on a task to open a detailed view of the `task`."
      ]
    }]
  }, {
    title: "Patient Details View",
    body: [{
      texts: [
        "This view holds **all** information about a patient, and breaks it down by into a few categories.",
        "The top area is information that very rarely changes, such as `Diagnosis` and `Risk`.",
        "The bottom area is information that may change every week or ward round, such as `Obs` and `Plan`.",
        "You can edit any of the information by just clicking the boxes and typing away.",
      ], img: { src: "./guide/launchIcon.jpg", class: "screenshot uk-flex-first"}
    }, {
      texts: [
        "Right at the top, there is the patient's `Name` and `Location`.",
        "To edit these, click the `Demographics` button."
      ], img: { src: "./guide/launchIcon.jpg", class: "screenshot"}
    }, {
      texts: [
        "Towards the right, there is a pane titled `Handover`. This contains the daily handover and any important notes about the patient.",
        "To add a `Handover` note, click the `Add` button to the top right of the pane.",
        "To edit a `Handover` note, click the date of the note."
      ], img: { src: "./guide/launchIcon.jpg", class: "screenshot"}
    }, {
      texts: [
        "Towards the center, there is a pane titled `Tasks`. This contains all the tasks for the patient, arranged by due date.",
        "To add a `Task`, click the `Add` button to the top right of the pane.",
        "To edit a `Task`, click the body of the task."
      ]
    }, {
      texts: [
        "When you are satisfied with the changes (any updates to information / handover / tasks), you have 2 options to save your changes:",
        "1. Click the \`Back\` button to the top left to return to the \`List\` view **or**",
        "2. Click either the \`Next\` or \`Prev\` buttons to the top right to view details of the next / previous patient."
      ], img: { src: "./guide/launchIcon.jpg", class: "screenshot uk-flex-first"}
    }]
  }, {
    title: "Task Details View",
    body: [{
      texts: [
        "At the top, you can see the main properties of the task: the `Assigned To` group, the `Due Date`(s), and if it's `Completed`.",
        "The pane at the bottom shows all the ongoing `Details` of the task, arranged with the most recent comments at the bottom. As a rule, the main details of the task is at the top, and updates follow below."
      ], img: { src: "./guide/temp-screen.jpg", class: "screenshot"}
    }, {
      texts: [
        "You have 2 possible actions to alter a task:",
        "1. You can click the `Update` button. This will allow you to add a new comment to the task and change the due date.",
        "2. You can click the `Complete` button. This will mark the task as completed and is **irreversible**.\ You will also need to leave a comment (such as the result of the task).\ You can also select `Repeat` to create a similar task with a new `Due Date`.",
        "In both cases, press `Save` to finalize your changes."
      ], img: { src: "./guide/launchIcon.jpg", class: "screenshot"}
    }]
  }, {
    title: "Generating a Report",
    body: [{
      texts: [
        "At the `List` view, press the `Reports` button at the top right.\ This is open the `Report` view.",
        "This is the view to generate reports for printing, such as a handover report between shifts."
      ], img: { src: "./guide/temp-screen.jpg", class: "screenshot"}
    }, {
      texts: [
        "At the top of the view, there are options to filter the reports.\ There are 3 main reports:",
        "1. **Patients**: This is the main report showing the most up-to-date information for each patient, recent handovers, and outstanding tasks.\ This is the main report for handing over between shifts.",
        "2. **Tasks**: This is creates a report of outstanding tasks in a particular `Ward` or assinged to a particular group.",
        "3. **Incidents**: This creates a report of handovers marked with `Incident(s)` for a `Ward` in a timeframe.",
      ], img: { src: "./guide/launchIcon.jpg", class: "screenshot"}
    }, {
      texts: [
        "In each case you will need to press the `Generate` button to create the report.",
        "When you're satisfied with the output of the report, press the `Print` button to print the report."
      ], img: { src: "./guide/launchIcon.jpg", class: "screenshot"}
    }]
  }, {
    title: "Anything Else?",
    body: [{
      texts: [
        "Nick-Knack is a project undergoing active development by Nick.",  
        "If you have any questions, comments, or suggestions, drop me (Nick@DrTing.co.uk) an email.\ I'll try to get back to you, and you might see your suggestion get implemented!"
      ]
    },]
  },]

  return {
    sections
  }
}