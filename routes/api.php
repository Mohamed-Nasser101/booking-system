<?php

use App\Http\Controllers\Api\BookableAvailabilityController;
use App\Http\Controllers\Api\BookableController;
use App\Http\Controllers\Api\BookablePriceController;
use App\Http\Controllers\Api\BookableReviewController;
use App\Http\Controllers\Api\BookingByReviewController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\CheckoutController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('bookables',BookableController::class);
Route::get('bookable/{availablity}/show',BookableAvailabilityController::class)
->name('bookables.availablity.show');

Route::get('bookable/{bookable}/reviews',BookableReviewController::class)
    ->name('bookables.reviews');
Route::get('bookable/{bookable}/price',BookablePriceController::class)->name('bookable.price');
Route::get('booking-by-review/{key}',BookingByReviewController::class)->name('booking.by-review.show');
Route::apiResource('reviews',ReviewController::class);
Route::post('checkout',CheckoutController::class)->name('checkout');
