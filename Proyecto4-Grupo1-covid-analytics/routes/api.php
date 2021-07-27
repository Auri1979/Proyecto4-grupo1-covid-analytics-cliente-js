<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnalyticsController;

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

 Route::get('/entries/{dates}', [AnalyticsController::class, 'date']);

Route::get('/entries/date/{dates}/country/{id}', [AnalyticsController::class, 'dateAndCountry']); 

Route::get('/suma', [AnalyticsController::class, 'sumatorioDatosPaises']);

Route::get('/paisSuma/{country}', [AnalyticsController::class, 'sumatorioPais']);

Route::get('/countries', [AnalyticsController::class,'index1']);
 
Route::get('/regions', [AnalyticsController::class,'index2']);

Route::get('/regions/{id}', [AnalyticsController::class,'getRegion']);
/* 
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
 */