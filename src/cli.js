import arg from "arg";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createProject } from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--git",
      "-y": "--yes",
      "-i": "--install",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args["--yes"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || true,
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = "basic";
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [];
  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Please choose which portfolio template to use",
      choices: ["basic", "modern"],
      default: defaultTemplate,
    });
  }

  if (!options.git) {
    questions.push({
      type: "confirm",
      name: "git",
      message: "Should a git be initialized?",
      default: false,
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git,
  };
}

export async function cli(args) {
  let anim = chalkAnimation.rainbow(`\nP O R T F O L I O - C R E A T O R\n`);
  await new Promise((res) => setTimeout(res, 1500));
  anim.stop();
  console.log("Welcome to portfolio creator.");
  console.log("");
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
  let anim2 = chalkAnimation.neon(
    "\n You have succesfully installed the portfolio template. \n"
  );
  await new Promise((res) => setTimeout(res, 3500));
  anim2.stop();
}
