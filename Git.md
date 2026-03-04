---
layout: page
title: GitHub Guide
parent: Resources
permalink: /git-guide/
---

## What is Git?

Git tracks changes in code. GitHub hosts Git repositories online for collaboration.

---

## How to Setup Git Locally?
Download the Git from the official website and install it. For verifying run the below command from terminal.

```
git --version
```

Make sure you have a GitHub account. If you do not have account please create one by signing up on [github.com](https://github.com){:target="_blank"}. Please configure your git locally by running the below commands in your terminal.

```
git config --global user.name "Your Name"
git config --global user.email "your github email id"
```

---

## How to Contribute and Send a PR Request?

First, you need to fork the [github.com/sudarshansudarshan/vinternship](https://github.com/sudarshansudarshan/vinternship){:target="_blank"} repository. Go to the repository and click the **Fork** button on the repository homepage. 

Then, you need to clone the forked repository by using the command below and the HTTPS link that you can find on the **<> Code** dropdown on your forked repository.

```
git clone "HTTP link for cloning of your forked repo"
cd vinternship
```
Always create a branch when you start working locally. You can create the branch by using the given command

```
git checkout -b your-branch-name
Example: `git checkout -b feature/support_page`
```

After creating a new branch locally, you can just make all the changes or you can work on the particular feature/bug. Upon sucessfully completing the required changes and saving them locally. You need to run the below commands to save them to your github repository.

```
git add .
git commit -m "description of the changes"
git push origin your-branch-name
```

After successfully pushing the changes to your repository. You need to create a PR(Pull Request) from your forked repository in order to send the changes to the main repository, where a member of the VLED team will review, comment and accept or merge your PR requests.

In order to create the Pull Request, you need to go to your forked repository, there you will see **Compare & pull request** option whenever you have committed some changes. Add small title for the pull request and then press the **Create Pull Request** button. This will successfully create a pull request from your forked repository to the original/main repository.

---

*Happy Contributing!*