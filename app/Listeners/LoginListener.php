<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Auth\Events\Login;
use App\Mail\NovoAcesso;
use Illuminate\Support\Facades\Mail;
class LoginListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(Login $event)
    {
        info("logou".$event->user);
        $tempo = now()->addMinutes(1);

        Mail::to($event->user)
        #->send(New NovoAcesso($event->user));
        #->queue(New NovoAcesso($event->user));
        ->later($tempo,New NovoAcesso($event->user));
    }
}
