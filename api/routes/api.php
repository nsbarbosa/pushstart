<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * Route::group(['prefix' => 'auth'], function () {
  *  Route::post('/login','AuthController@authenticate');
  *  Route::post('/register','AuthController@register');
* });
 */
Route::fallback(function(){
  return response()->json(['message' => 'Not Found!'], 404);
});
Route::post('/login','AuthController@authenticate');
Route::post('/register','AuthController@register');

Route::group(['middleware' => ['auth:api']], function () {
    //
    Route::get('/user', 'UserController@get');
    Route::put('/user', 'UserController@update');
    Route::post('/image', 'UploadController@upload');
    Route::delete('/logout','AuthController@logout');
});
