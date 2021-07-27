<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entrie;
use App\Models\Region;
use App\Models\Country;


class AnalyticsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    /* public function index()
    {
        $entries = Entrie::all();
        $countries = Country::all();
        $regions = Region::all();
        return ['entries'=>$entries,
                'countries'=>$countries,
                'regions'=>$regions];
    } */
    
    public function index($date)
    {
    
        $arrayDate = explode('/',(string)$date); 
        $entries = Entrie::where('day', '=', $arrayDate[0])->where('month','=', $arrayDate[1])->where('year', '=',$arrayDate[2])->paginate(15);
        
        return $entries;      
    }
    public function index1()
    {
        
        $countries = Country::all();
       
        return ['countries'=>$countries];
    }
    public function index2()
    {
        $regions = Region::all();
        return ['regions'=>$regions];
    }
    public function getRegion($idRegion){
        //dd($idRegion);
        $region=Region::findOrFail($idRegion);
        dd($region);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
