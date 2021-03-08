[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/john-shuford-data-analyst/)

I created a page with JavaScript and HTML to produce a table showing UFO sighthing data. This table can then be updated with the filters on the left to narrow down on a specific field that one might be looking for. You can see the deployed webpage [HERE](https://johnshuford.github.io/Javascript-Challenge/)!

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![plot](./images/ScreenShot.png)

In this project I created a dynamically loading table using several diffrent JavaScript filters. The page is able to update and drill down to the specific paramaters specified with what ever the user puts into the fields on the left.

### Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

It is important to make sure that you have these files refrenced in the head of your HTML file or nothing will show when you try and run the Bootstrap elements.

CSS
  ```sh
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css">
  ```


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JohnShuford/Web-Design-Challenge
   ```
2. Get to editing the HTML files in your favorite text editor! I recomend [Visual Studio Code](https://code.visualstudio.com/)


<!-- USAGE EXAMPLES -->
## Usage

Here is a code example of a bootstrap navigation bar! They are faily simple to use and customize to any need you may have. Just make sure that you are calling all of the requisite files in the header of your HTML page.

```sh
function buildtable(data){
  tbody.html("");
  data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      });
  });
};
```

For more Bootstrap documentation follow this link! https://getbootstrap.com/docs/4.1/getting-started/introduction/


<!-- CONTACT -->
## Contact

John Shuford - [LinkedIn](https://www.linkedin.com/in/john-shuford-data-analyst/) - johnshuford@me.com

Project Link: [https://github.com/JohnShuford/Web-Design-Challenge](https://github.com/JohnShuford/Web-Design-Challenge)

Deployed: [https://johnshuford.github.io/Web-Design-Challenge/](https://johnshuford.github.io/Web-Design-Challenge/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* This project was completed for and under the supervision of the Trilogy team opperating the Data Analytics Bootcamp through the University of Denver.
* Shoutouts to Svitlana Malenfant (Instructor)


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/john-shuford-data-analyst/
