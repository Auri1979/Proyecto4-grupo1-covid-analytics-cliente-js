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


Route::prefix('entries')->group(function () {
    Route::get('/byDate/{date}', [AnalyticsController::class, 'getEntriesByDate']);
    
    Route::get('/byDate/{date}/byCountry/{id}', [AnalyticsController::class, 'getEntriesByDateAndCountry']); 
    
    Route::get('/stats', [AnalyticsController::class, 'getStats']);
    
    Route::get('/stats/byCountry/{country_id}', [AnalyticsController::class, 'getStatsByCountry']);
   
    Route::get('/countries',[AnalyticsController::class, 'getCountries']);
});

