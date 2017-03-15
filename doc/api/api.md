# clay-errors@1.0.0

Custom error classes for ClayDB

+ Functions
+ [`NotFoundError`](#clay-errors-classes) Class
  + [new NotFoundError(message, detail)](#clay-errors-classes-not-found-error-constructor)
+ [`SchemaError`](#clay-errors-classes) Class
  + [new SchemaError(message, detail)](#clay-errors-classes-schema-error-constructor)

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

## `SchemaError` Class

Schema validation error

**Extends**: 

+ `Error`



<a class='md-heading-link' name="clay-errors-classes-schema-error-constructor" ></a>

### new SchemaError(message, detail)

Constructor of SchemaError class

| Param | Type | Description |
| ----- | --- | -------- |
| message | string | Error message |
| detail | Object | Error detail |




