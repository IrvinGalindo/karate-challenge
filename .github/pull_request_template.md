# 📌 PR Details

---

## 📝 Check List

---
<i>Make sure you have completed all the check marks mentioned below</i>

-[ ] Ignore feature called [conduit.feature](../src/test/java/org/conduit/features/conduit.feature). Do not delete it,
 just
 ignore it using **tags**.
-[ ] Create attributes in config variable on [karate-config.js](../src/test/karate-config.js).
    -[ ] **baseUrl:**  it will contain the baseUrl.
    -[ ] **token:** it will store a token given by a request.
    -[ ] **email:** it will store an email given by a feature.
    -[ ] **username:** This variable will contain two different values depending on the environment you use to run
     your
     tests. if karate.env=dev, then **[branchName]**-dev. if karate.env=prod, then **[branchName]-prod**.
    -[ ] **slugs:** array which will store slug ids given by a request.
-[ ] Create new feature file called **register-user** under package [features](../src/test/java/org/conduit/features)
 and test the
 following
 scenarios. [Register user](https://web.postman.co/workspace/My-Workspace~f79fdbc6-f622-45c7-8c45-63f99c4038e7/request/37903089-70cff9d5-77a2-4470-b630-678448de8359?tab=body).
    -[ ] Create a method called **getRandomNumber**
     on [DataGenerator](../src/test/java/org/conduit/helpers/DataGenerator.java) class which will return a random
     number.
    -[ ] Append the generated number to the global **username** variable at the end.
    -[ ] Using the username variable, create a new email and store it in the global variable called **email**
    -[ ] **Scenario 1:** Register a valid user using the global variables **email**, and **username**
     created to generate new emails and usernames.
        -[ ] Validate the status code.
        -[ ] Validate request returns user details.
        -[ ] Store token in the variable called **token**.
    -[ ] **Scenario 2:** Register an invalid user, missing username in request
     body. [Unexpected error request](https://web.postman.co/workspace/My-Workspace~f79fdbc6-f622-45c7-8c45-63f99c4038e7/example/37903089-3b355112-5256-44f9-b8bd-8120c3e78c25)
        -[ ] Validate the status code.
        -[ ] Validate request returns an error which mentions attribute is missed.
    -[ ] **Scenario 3:** Register an existing
     user. [Existing user request](https://web.postman.co/workspace/My-Workspace~f79fdbc6-f622-45c7-8c45-63f99c4038e7/example/37903089-15447193-f8af-4ad0-9a2e-52946ecce339)
        -[ ] Validate the status code.
        -[ ] Validate request returns an error which mentions user already exists
-[ ] Create new feature file called **tags** under package [features](../src/test/java/org/conduit/features) and test
 the following
 request [Tags](https://web.postman.co/workspace/My-Workspace~f79fdbc6-f622-45c7-8c45-63f99c4038e7/request/37903089-0c32b370-46e7-4286-8aaa-4e930ed8e25f).
    -[ ] **Scenario 1:** Get all tags.
        -[ ] Validate the status code.
        -[ ] Validate request returns an array which contains the tags **Coding**, and **Enroll**.
        -[ ] Store the tags **Coding**, and **Enroll** in a new variable called **tags**.
-[ ] Create new feature file called **create-articles** under package [features](../src/test/java/org/conduit/features)
 and test the
 following
 request [Create Articles](https://web.postman.co/workspace/My-Workspace~f79fdbc6-f622-45c7-8c45-63f99c4038e7/request/37903089-bdcfed20-0a62-45e6-8433-e1883331e192).
    -[ ] Create two article Json objects on [articles](../src/test/java/org/conduit/data/articles.json) json file.. *
     *Example**
  ```
     {
 
       "article": {
        "title": "My test",
        "description": "this is a karate test",
        "body": "My first karate test",
        "tagList": []
       }
     }
  ```
    -[ ] **Scenario 1:** Create a new articles using json file
     called [articles](../src/test/java/org/conduit/data/articles.json), stored tags and using the token as header.
        -[ ] Validate the status code.
        -[ ] Validate request returns article information you sent, ensure request contains an array which contains the
         tags **Coding**, and **Enroll**.
        -[ ] Store the **slug** in the variable called **slugs**.
    -[ ] **Scenario 2:** Create a new articles missing title attribute in request
     body [Unexpected error request](https://web.postman.co/workspace/My-Workspace~f79fdbc6-f622-45c7-8c45-63f99c4038e7/example/37903089-7095c4c1-9e59-4ba1-9b31-a61734b6cb88)
        -[ ] Validate the status code.
        -[ ] Validate request returns an error which mentions attribute is missed.
-[ ] Create new feature file called **delete-articles** under package [features](../src/test/java/org/conduit/features)
 and test the
 following
 request [Delete Articles](https://web.postman.co/workspace/My-Workspace~f79fdbc6-f622-45c7-8c45-63f99c4038e7/request/37903089-44ba4cdf-3633-4731-b85a-7ebb7a9bfd5b).
    -[ ] **Scenario 1:** Delete the first article using the first slug in **slugs** variable.
        -[ ] Validate the status code.
        -[ ] Remove deleted slug from **slugs** variable
-[ ] Run program using **dev** environment, validate test pass, and save the report that is
 in [cucumber](../target/cucumber-html-reports/overview-features.html)

``` mvn clean test -Dkarate.env=dev -Dtest=ConduitRunnerTest```

-[ ] Run program using **prod** environment, validate test pass, and save the report that is
 in [cucumber](../target/cucumber-html-reports/overview-features.html)

``` mvn clean test -Dkarate.env=prod -Dtest=ConduitRunnerTest```

## 📁 Evidences

<i>Do not miss to include the reports you saved in the previous steps</i>
