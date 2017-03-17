# clay-errors@2.0.0

Custom error classes for ClayDB

+ Functions
+ [`NotFoundError`](#clay-errors-classes) Class
  + [new NotFoundError(message, detail)](#clay-errors-classes-not-found-error-constructor)
+ [`PolicyError`](#clay-errors-classes) Class
  + [new PolicyError(message, detail)](#clay-errors-classes-policy-error-constructor)

## Functions



<a class='md-heading-link' name="clay-errors-classes"></a>

## `NotFoundError` Class

Resource not found error

**Extends**:

+ `Error`



<a class='md-heading-link' name="clay-errors-classes-not-found-error-constructor" ></a>

### new NotFoundError(message, detail)

Constructor of NotFoundError class

| Param | Type | Description |
| ----- | --- | -------- |
| message | string | Error message |
| detail | Object | Error detail |


<a class='md-heading-link' name="clay-errors-classes"></a>

## `PolicyError` Class

Policy validation error

**Extends**:

+ `Error`



<a class='md-heading-link' name="clay-errors-classes-policy-error-constructor" ></a>

### new PolicyError(message, detail)

Constructor of PolicyError class

| Param | Type | Description |
| ----- | --- | -------- |
| message | string | Error message |
| detail | Object | Error detail |




