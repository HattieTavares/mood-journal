# Mood Color Tracking App

App with a daily check-in/quick quiz about how you’re feeling mentally and physically. Each check-in is scored and assigned a color which will display a graph for a visual representation of it.

**Link to project:** https:// OUR URL HERE

![Site Preview Image](link from repo here)

## How It's Made:

**Tech used:** HTML, EJS, TailwindCSS, Javascript, Express, Node.js, MongoDB

Mood Colors is built with MVC architecture to enable changes to components as new features are added and to ensure the project remains maintainable as the user base grows. A key project requirement was ease of use for both mobile and desktop user experiences.

Users can add and review mood data; the default view provides a 7-day lookback. User authentication is handled by Passport middleware. EJS templating and Tailwind CSS were used to build the user interface.

## Optimizations

## Lessons Learned:

## Planned Features for v2.0

- implement Google Oauth 2.0
- additional quiz questions to track more holistic health data
- implement overall health color scale

<br>

# How To Contribute

### Step 1: Forking the repository

To work on this project, you will first need to make a copy of this repository. To do this, you should fork the repository and then clone it so that you have a local working copy.

Get your own Fork/Copy of this repository by clicking Fork button at right upper corner of your screen.

![fork](https://user-images.githubusercontent.com/87236107/193420502-efb8d99e-aeaf-4d78-b42f-da8c5399d3e9.png)

### Step 2: Clone the Forked Repository

After forking the repository, you can now clone it to have a local working copy of the codebase.

To make your local copy of the repository follow the steps:

- Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

![68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636c6f6e652e706e67](https://user-images.githubusercontent.com/87236107/193536673-884238f8-783a-4e8b-b701-93666d86f181.png)
![68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636f70792d746f2d636c6970626f6172642e706e67](https://user-images.githubusercontent.com/87236107/193537571-dd32573a-c664-40f5-b9fe-3aa77c1a8c87.png)

Open a terminal in a blank folder where you would like to store the project and run the following git command:

```
git clone <url>
```

where <url> is the url (without the <>) to this repository aka your fork of this project. See the previous steps to obtain the url.

### Step 3: Make your changes

Now you can see all the files in your local system and begin making changes.

### Step 4: Commit your changes

- Track your changes:

```
git add .
```

- Commit your changes

```
git commit -m "Relevant message"
```

- Push the committed changes in your feature/main branch to your remote repo.

```
git push -u origin <your_branch_name/main>
```

### Step 5: Create Pull Request

Now visit `mood-colors` repository which you forked.

- Click on where it says `X commit ahead`
- To create a pull request, click on `Create pull request`. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.
- Add appropriate title and description to your pull request explaining your changes and efforts done.
- Click on `Create Pull Request`.

## 🎉 Kudos! You have made a PR! Sit back patiently and relax while your PR is reviewed and merged. Thank you for your contribution!

### To update your local repository on your local machine:

- On GitHub, navigate to the main page of the forked repository that you want to sync with the upstream repository.
  ![Alt text](https://docs.github.com/assets/cb-49937/images/help/repository/update-branch-button.png)
- On your terminal, pull the forked repo that is now synced.

```
git pull -u origin main
```
