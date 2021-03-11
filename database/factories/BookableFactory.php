<?php

namespace Database\Factories;

use App\Models\Bookable;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class BookableFactory extends Factory
{
    protected $suffix = [
        'Villa',
        'House',
        'Cottage',
        'Luxury Villas',
        'Cheap House',
        'Rooms',
        'Cheap Rooms',
        'Luxury Rooms',
        'Fancy Rooms'
    ];

    protected $model = Bookable::class;

    public function definition()
    {
        return [
            'title' => $this->faker->city.' '. Arr::random($this->suffix),
            'description' => $this->faker->text(),
            'price' => random_int(15, 600)
        ];
    }
}
