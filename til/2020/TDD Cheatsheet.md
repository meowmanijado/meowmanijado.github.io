# TDD Cheatsheet

Published on March 26, 2020



Assertions

```php
$this->assertStatus(200);
$this->assertEquals('100', $someValue);
$this->assertTrue();
$this->assertFalse();
$this->assertNotNull();
 
$this->assertArrayHasKey('email', $this->decodeResponse());
$this->assertSessionHas();
```



Factory State

```php
$factory->state(User::class, 'admin', function (Faker $faker) {
	return [
		'is_admin' => '1'
	]
});	

factory(User::class)->states('admin');
```



Act

```php
$this->json('POST', "/sample-endpoint/{$user->id}" $attributes);
```



HTTP Status

```
200 - OK
404 - Not Found
422 - Validation Status
```



Arrange

Act

Assert

