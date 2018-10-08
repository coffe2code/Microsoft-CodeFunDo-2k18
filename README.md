# Microsoft CodeFunDo++ - 2k18
This README illustrates our solution for problem statement of CodeFunDo++ 2k18 which is stated as:

>“Find better ways to save lives and prevent economic losses through mechanisms to predict, prevent, or manage the impact of natural disasters.”

Our solution is primarily focussed on mechanisms to manage the impact of natural disasters so as to reduce the aftermath of the disasters.




## Abstract

The aftermath of a disaster scenario is tackled with the help of several relief organizations. There are many different types  of relief efforts, which may be required such as food delivery, ambulance, evacuations,etc. in a post-disaster rescue operation. We propose an integrated method for disaster logistics management through vehicle route planning. Our solution is a web app which aims to make life easier for the *Relief Agencies* by effectively coordinating their relief efforts.

## Problems
* During disaster scenario, vehicles carrying out relief efforts often operate in an ad-hoc manner. Since vehicles need to visit several places for aiding relief efforts, the route taken is generally haphazard. The time/distance taken for helping all the areas is difficult to reduce manually.
* Vehicles such as *Food Trucks* have a fixed capacity. Once the capacity runs out, they need to revisit the *Relief Agency* for restocking. It is difficult to estimate which places should the vehicle visit before coming back to restock.
* Number of vehicles owned by a particular agency are limited. It is difficult to conclude how to utilize the vehicles in the most efficient manner.
* Path Planning is a complex procedure. Finding the shortest route to be taken by a vehicles to traverse all locations is a variation of the *Travelling Salesman Problem*. These sets of algorithms are NP-complete, hence there is no known way to solve these problems in polynomial time. Relief efforts may be required in several areas at the same time. Optimal path planning for such scenarios is a problem which could take hours to solve. This is time a *Relief Agency* can't afford at all.

## Solution
We'll describe our solution in 2 parts:
* The UI(User Interface) for data input and solution output.
* The algorithm used to provide near optimal solutions almost instantaneously.

Our webapp provides a UI(User Interface) for the operator to input the location of the *Relief Agency*. The operator would then need to enter locations of the areas in need of help. Each area would also have a certain demand(E.g. Food required in kgs). The operator would enter the number of vehicles available at the agency currently.
The website would display the routes to be taken by the vehicles on Google Maps which would be embedded in the page.
The amazing thing about our solutions is that it provides the paths for the vehicles in near instant time. This allows the *Relief Agency* at breakneck pace while ensuring that the vehicles travel on a near optimal route. This would save a lot of time which the agency could use for other important stuff.

#### User Interface

The website would first load up a login form. The operator of the agency would need to enter the details such as *Name of Agency*,*Password* etc. The webapp would then load up Google Maps indicating the location of the agency(the location of the agency would be stored upon registration of the agency on the website).

Upon logging in the website would provide an interface the for entering the location of areas in distress and their required demands. Upon clicking solve, the website would compute the most efficient network of routes(both in terms of time and number of vehicles used). The route would be shown as in the following example(Map is of Chennai when it was affected by floods) -
