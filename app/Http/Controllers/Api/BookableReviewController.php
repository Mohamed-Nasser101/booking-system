<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookableReviewResource;
use App\Models\Bookable;
use Illuminate\Http\Request;

class BookableReviewController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function __invoke(Bookable $bookable, Request $request)
    {
        return BookableReviewResource::collection($bookable->reviews()->latest()->get());
    }
}
