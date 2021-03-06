# Weather-Forecast

## Table of Contents
1. [Description](#description) 
2. [Usage](#usage)
3. [Resources](#resources)

## Description

A weather dashboard that runs in the browser and features dynamically updated HTML and CSS, while using Third-Party APIs to retrive weather data.

## Usage

- The application starts with only the header and container with a search form

```html
            <div class="container">
                <!-- search bar that allows user to input desired city -->
                <h3>Seach for a City</h3>
                <form id="search-form" class="d-flex">
                    <input id="searched-city" type="text" placeholder="Charlotte" type="search">
                    <br>
                    <button id="search-btn">Search</button>
                </form>
```

- When city is seached the other components are dynamically created with Event Listener

- From value input in the search bar, One Weather is asked in order to retrieve current weather data.
Viewer can see current weather information.

![City Container Data](./assets/images/Weather-Forecast.png)


## Resources

- [Repository](https://github.com/alicessilva22/Weather-Forecast)
- [Live Site](https://alicessilva22.github.io/Weather-Forecast/)


