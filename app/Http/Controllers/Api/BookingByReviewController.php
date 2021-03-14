<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookingByReviewShowResource;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingByReviewController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param $key
     * @param \Illuminate\Http\Request $request
     * @return BookingByReviewShowResource
     */
    public function __invoke($key ,Request $request)
    {
        $booking = Booking::findByReviewKey($key);
        return $booking ? new BookingByReviewShowResource($booking) : abort(404);
    }
}
