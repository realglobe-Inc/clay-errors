# clay-errors@3.0.0

Custom error classes for ClayDB

+ Functions
+ [`NotFoundError`](#clay-errors-class) Class
  + [new NotFoundError(message, detail)](#clay-errors-class-not-found-error-constructor)
+ [`PolicyError`](#clay-errors-class) Class
  + [new PolicyError(message, detail)](#clay-errors-class-policy-error-constructor)

## Functions



<a class='md-heading-link' name="clay-errors-class"></a>

## `NotFoundError` Class

Resource not found error

**Extends**:

+ `Error`



<a class='md-heading-link' name="clay-errors-class-not-found-error-constructor" ></a>

### new NotFoundError(message, detail)

Constructor of NotFoundError class

| Param | Type | Description |
| ----- | --- | -------- |
| message | string | Error message |
| detail | Object | Error detail |


<a class='md-heading-link' name="clay-errors-class"></a>

## `PolicyError` Class

Policy validation error

**Extends**:

+ `Error`



<a class='md-heading-link' name="clay-errors-class-policy-error-constructor" ></a>

### new PolicyError(message, detail)

Constructor of PolicyError class

| Param | Type | Description |
| ----- | --- | -------- |
| message | string | Error message |
| detail | Object | Error detail |




