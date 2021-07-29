<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entrie;
use App\Models\Region;
use App\Models\Country;


class AnalyticsController extends Controller
{
    
    public function getEntriesByDate($date)
    {
        $arrayDate = explode('-',$date);
        $entries = Entrie::with('country')
                            ->where('day', '=', $arrayDate[0])
                            ->where('month','=', $arrayDate[1])
                            ->where('year', '=',$arrayDate[2])
                            ->get();
                            
        
        return [
            'data' => $entries,
            'status' => 200
        ];     
    }

    public function getEntriesByDateAndCountry($date,$idCountry)
    {
        $arrayDate = explode('-',$date);

        $entries = Entrie::with('country')
                            ->where('day', '=', $arrayDate[0])
                            ->where('month','=', $arrayDate[1])
                            ->where('year', '=',$arrayDate[2])
                            ->where('country_id', '=',$idCountry)
                            ->get();
        
        return [
            'data' => $entries,
            'status' => 200
        ];    
    } 

   
    public function getStats()
    {
        $entries = Entrie::with('country')->select('country_id', Entrie::raw('SUM(cases) as cases'), Entrie::raw('SUM(deaths) as deaths'))
            ->groupBy('country_id')
            
            ->get();
           
         return  [
            'data' => $entries,
            'status' => 200

         ];
    }

    public function getStatsByCountry($id)
    {


        $entry = Entrie::with('country')
                        ->where('country_id','=', $id)
                        ->get();
        
        
         return [
                    'data' => [
                         'country_name'=>$entry->first()->country->countriesAndTerritories,
                        'cases'=>$entry->sum('cases'), 
                        'deaths'=>$entry->sum('deaths')
                   ],
                     'status' => 200
                    
               ];
    }
    
    public function getCountries(){
        
        $countries = Entrie::with('country')->paginate(15);
                    
    
    return $countries;

    }

}
