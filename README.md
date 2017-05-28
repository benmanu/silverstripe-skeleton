# silverstripe-skeleton :skull:

## Overview

This is trying to be a semi-opinionated base project skeleton that should hopefully get a SilverStripe site up and running with less hassle. 

Feature | Notes | Installed/Done | Example
------------ | ------------- | ------------ | -----------
Styleguide | [silverstripe-simple-styleguide](https://github.com/benmanu/silverstripe-simple-styleguide) | [x] | [ ]
Frontend dependencies | [yarn](https://yarnpkg.com/en/) | [x] | [x]
Frontend build chain | [laravel-mix](https://github.com/JeffreyWay/laravel-mix) | [x] | [x]
JavaScript framework | [vue](https://vuejs.org/) | [x] | [ ]
JavaScript tests | [Karma](https://karma-runner.github.io/) | [x] | [ ]
JavaScript linting | [ESLint](http://eslint.org/) | [x] | [x]
JavaScript standard | [Airbnb](https://github.com/airbnb/javascript) | [x] | [x]
CSS | [SCSS](http://sass-lang.com/) | [x] | [x]
CSS Next | [cssnext](http://cssnext.io/) | [ ] | [ ]
CSS linting | | [ ] | [ ]
CSS standard | [BEM](https://css-tricks.com/bem-101/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) | [ ] | [ ]
CSS grid | | [ ] | [ ]
Accessibility tests | [Pa11y](http://pa11y.org/), [tota11y](http://khan.github.io/tota11y/) | [ ] | [ ]
PHP dependencies | [composer](https://getcomposer.org/) | [x] | [x]
PHP unit tests | [PHPUnit](https://phpunit.de/) | [x] | [ ]
PHP linting | [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) | [x] | [ ]
PHP standard | [PSR-2](http://www.php-fig.org/psr/psr-2/) | [ ] | [ ]
Form templates | | [ ] | [ ]
Web components | | [ ] | [ ]
SilverStripe editor css | | [x] | [x]
SilverStripe dev fixtures | [populate](https://github.com/dnadesign/silverstripe-populate) | [x] | [ ]
SilverStripe `/mysite` boilerplate | | [ ] | [ ]
Vagrant box | | [ ] | [ ]
Docker image | | [ ] | [ ]
CI/CD integration | | [ ] | [ ]

### SilverStripe Modules
- [CMS](https://github.com/silverstripe/silverstripe-cms)
- [framework](https://github.com/silverstripe/silverstripe-framework)
- [dynamodb](https://github.com/silverstripe/silverstripe-dynamodb)
- [environmentcheck](https://github.com/silverstripe/silverstripe-environmentcheck)
- [crontask](https://github.com/silverstripe/silverstripe-crontask)
- [gridfieldextensions](https://github.com/silverstripe-australia/silverstripe-gridfieldextensions): orderable gridfields etc.
- [simple-styleguide](https://github.com/benmanu/silverstripe-simple-styleguide)
- [populate](https://github.com/dnadesign/silverstripe-populate): dev/test environment fixtures.

### Installation

    yarn install
    composer install

### Tasks

    yarn run dev
    yarn run watch
    yarn run production
    yarn run test
    vendor/bin/phpunit
    sake dev/tasks/PopulateTask
