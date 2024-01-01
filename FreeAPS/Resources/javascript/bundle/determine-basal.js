var freeaps_determineBasal;(()=>{var e={5546:(e,r,a)=>{var t=a(6880);function o(e,r){r||(r=0);var a=Math.pow(10,r);return Math.round(e*a)/a}function n(e,r){return"mmol/L"===r.out_units?o(.0555*e,1):Math.round(e)}var i="",s="",l="",u="",m="",d="",c="",p="",b="",f="",g="",h="",B=1,v=1,_=1,M=1,S=1,x=1,y=100;function I(e,r,a,t,i){if(void 0===a)return rT.error="Error: iob_data undefined. ",rT;var l=a;if(a.length,a.length>1&&(a=l[0]),void 0===a.activity||void 0===a.iob)return rT.error="Error: iob_data missing some property. ",rT;if(!t)return s=", autoISF-SMB disabled:, B30 running","AIMI B30";if(!e)return"oref";var u=n(r.min_bg,r);if(r.use_autoisf&&r.temptargetSet&&r.enableSMB_EvenOn_OddOff||r.use_autoisf&&r.min_bg==r.max_bg&&r.enableSMB_EvenOn_OddOff_always&&!r.temptargetSet){r.temptargetSet?msgType="TempTarget ":msgType="ProfileTarget ","mmol/L"==r.out_units?(evenTarget=o(10*u,0)%2==0,msgUnits=" has ",msgTail=" decimal"):(evenTarget=u%2==0,msgUnits=" is ",msgTail=" number"),evenTarget?msgEven="even":msgEven="odd",r.iob_threshold_percent<100&&r.iob_threshold_percent>0&&(y=r.iob_threshold_percent);var m=y;return evenTarget?0==r.max_iob?(console.error("SMB disabled because of max_iob=0"),"blocked"):m/100<a.iob/(r.max_iob*i)?(console.error("ioBTH: "+o(m,1)+"%, IOB% of maxIOB at "+o(a.iob/(r.max_iob*i)*100,1)+"%"),1!=i?(console.error("Full Loop modified max_iob "+r.max_iob+" to effectively "+o(r.max_iob*i,2)+" due to profile % and/or exercise mode"),", effective maxIOB "+o(r.max_iob*i,2)):", maxIOB "+r.max_iob,console.error("SMB disabled by Full Loop logic: IOB "+a.iob+" is more than "+m+"% of maxIOB "+r.max_iob),console.error("Full Loop capped"),"iobTH"):(console.error("SMB enabled - "+msgType+u+msgUnits+msgEven+msgTail),r.temptargetSet&&u<100?(console.error("ioBTH: "+o(m,1)+"%, IOB% of maxIOB at "+o(a.iob/(r.max_iob*i)*100,1)+"%"),console.error("Loop at full power"),s=", autoISF-SMB enabled:, even TT","fullLoop"):(console.error("ioBTH: "+o(m,1)+"%, IOB% of maxIOB at "+o(a.iob/(r.max_iob*i)*100,1)+"%"),s=", autoISF-SMB enabled:, even Target",console.error("Loop at medium power"),"enforced")):(console.error("SMB disabled - "+msgType+u+msgUnits+msgEven+msgTail),s=", autoISF-SMB disabled:, odd Target",console.error("Loop at minimum power"),"blocked")}return console.error("Full Loop disabled"),"oref"}function T(e,r,a){"bg"==a?(polyX=[50,60,80,90,100,110,150,180,200],polyY=[-.5,-.5,-.3,-.2,0,0,.5,.7,.7]):"delta"==a&&(polyX=[2,7,12,16,20],polyY=[0,0,.4,.7,.7]);var t=polyX.length-1,o=polyX[0],n=polyY[0],i=polyX[t],s=polyY[t],l=1,u=1,m=1,d=o;if(o>e)i=polyX[1],l=(u=n)+((s=polyY[1])-u)/(i-(m=o))*(e-m);else if(i<e)o=polyX[t-1],l=(u=n=polyY[t-1])+(s-u)/(i-(m=o))*(e-m);else for(var c=0;c<=t;c++){if(o=polyX[c],n=polyY[c],o==e){l=n;break}if(o>e){l=u+(n-u)/(o-(m=d))*(e-m);break}u=n,d=o}return l*="delta"==a?r.delta_ISFrange_weight:e>100?r.higher_ISFrange_weight:r.lower_ISFrange_weight}function F(e,r,a,t,n,i,s,l,u){console.error("check ratio "+o(e,2)+" against autoISF min: "+r+" and autoISF max: "+a),e<r?(b=" (lmtd.min)",c="weakest autoISF factor "+o(e,2)+" limited by autoISF_min "+r,console.error(c),e=r):e>a&&(b=" (lmtd.max)",c="strongest autoISF factor "+o(e,2)+" limited by autoISF_max "+a,console.error(c),e=a);var m=1;return s&&i.temptargetSet&&l>u?(m=e*t,n=" (exerciseMode)",console.error("autoISF adjusts sens "+t+", instead of profile.sens "+i.sens),f=n):e>=1?(m=Math.max(e,t),e>=t&&(n="")):(m=Math.min(e,t),e<=t&&(n="")),c="final ISF factor "+o(m,2)+n,console.error(c),m}e.exports=function(e,r,a,w,D,G,C,O,U,A,R,P,E,k){var j=0,q="",L="",W="",z="",H="",N=0,X=0,Y=0,Z=0,$=0,J=0;const K=k.tddYtd,Q=k.tdd7d,V=k.hbt,ee=k.isEnabled;function re(e,r){var a=e.getTime();return new Date(a+36e5*r)}function ae(e){var r=w.bolus_increment;.025!=r&&(r=.05);var a=e/r;return a>=1?o(Math.floor(a)*r,5):0}function te(e){function r(e){return e<10&&(e="0"+e),e}return r(e.getHours())+":"+r(e.getMinutes())+":00"}function oe(e,r){var a=new Date("1/1/1999 "+e),t=new Date("1/1/1999 "+r);return(a.getTime()-t.getTime())/36e5}function ne(e,r){var a=0,t=r,o=(e-r)/36e5,n=0,i=o,s=0;do{if(o>0){var l=te(t);E[0].rate;for(let e=0;e<E.length;e++){var u=E[e].start;if(l==u){if(e+1<E.length){o>=(s=oe(E[e+1].start,E[e].start))?n=s:o<s&&(n=o)}else if(e+1==E.length){let r=E[0].start;o>=(s=24-oe(E[e].start,r))?n=s:o<s&&(n=o)}a+=ae(E[e].rate*n),o-=n,t=re(t,n)}else if(l>u)if(e+1<E.length){var m=E[e+1].start;l<m&&(o>=(s=oe(m,l))?n=s:o<s&&(n=o),a+=ae(E[e].rate*n),o-=n,t=re(t,n))}else if(e==E.length-1){o>=(s=oe("23:59:59",l))?n=s:o<s&&(n=o),a+=ae(E[e].rate*n),o-=n,t=re(t,n)}}}}while(o>0&&o<i);return a}if(R.length){let e=R.length-1;var ie=new Date(R[e].timestamp),se=new Date(R[0].timestamp);if("TempBasalDuration"==R[0]._type&&(se=new Date),(j=(se-ie)/36e5)<23.9&&j>21)$=ne(ie,(le=24-j,ue=ie.getTime(),new Date(ue-36e5*le))),z="24 hours of data is required for an accurate tdd calculation. Currently only "+j.toPrecision(3)+" hours of pump history data are available. Using your pump scheduled basals to fill in the missing hours. Scheduled basals added: "+$.toPrecision(5)+" U. ";else z=""}else console.log("Pumphistory is empty!"),dynISFenabled=!1,enableDynamicCR=!1;var le,ue,me=0,de=0;o((new Date(Fe).getTime()-G.lastBolusNormalTime)/6e4,1);for(let e=0;e<R.length;e++)if("Bolus"==R[e]._type&&(Z+=R[e].amount,0==me&&R[e].amount>=w.iTime_Start_Bolus)){me=t(R[e].amount,w);var ce=new Date(R[e].timestamp);de=o((new Date-ce)/36e5*60)}for(let e=1;e<R.length;e++)if("TempBasal"==R[e]._type&&R[e].rate>0){N=e,J=R[e].rate;var pe=R[e-1]["duration (min)"]/60,be=pe,fe=new Date(R[e-1].timestamp),ge=fe;do{if(e--,0==e){ge=new Date;break}if("TempBasal"==R[e]._type||"PumpSuspend"==R[e]._type){ge=new Date(R[e].timestamp);break}}while(e>0);var he=(ge-fe)/36e5;he<be&&(pe=he),Y+=ae(J*pe),e=N}for(let e=0;e<R.length;e++)if(0,0==R[e]["duration (min)"]||"PumpResume"==R[e]._type){let r=new Date(R[e].timestamp),a=r,t=e;do{if(t>0&&(--t,"TempBasal"==R[t]._type)){a=new Date(R[t].timestamp);break}}while(t>0);(a-r)/36e5>0&&($+=ne(a,r))}for(let e=R.length-1;e>0;e--)if("TempBasalDuration"==R[e]._type){let r=R[e]["duration (min)"]/60,a=new Date(R[e].timestamp);var Be=a;let t=e;do{if(--t,t>=0&&("TempBasal"==R[t]._type||"PumpSuspend"==R[t]._type)){Be=new Date(R[t].timestamp);break}}while(t>0);if(0==e&&"TempBasalDuration"==R[0]._type&&(Be=new Date,r=R[e]["duration (min)"]/60),(Be-a)/36e5-r>0){$+=ne(Be,re(a,r))}}var ve={TDD:o(X=Z+Y+$,5),bolus:o(Z,5),temp_basal:o(Y,5),scheduled_basal:o($,5)},_e=X;j>21?(L=". Bolus insulin: "+Z.toPrecision(5)+" U",W=". Temporary basal insulin: "+Y.toPrecision(5)+" U",q=". Insulin with scheduled basal rate: "+$.toPrecision(5)+" U",H=z+(" TDD past 24h is: "+X.toPrecision(5)+" U")+L+W+q,tddReason=", TDD, 24h: "+o(X,1)+", ytd: "+o(K,1)+", 7dØ: "+o(Q,1),console.error(H)):tddReason=", TDD: Not enough pumpData (< 21h)";var Me={},Se=0,xe=0,ye=new Date;if(A&&(ye=new Date(A)),void 0===w||void 0===w.current_basal)return Me.error="Error: could not get current basal rate",Me;var Ie=t(w.current_basal,w),Te=Ie,Fe=new Date;A&&(Fe=A);var we,De=new Date(e.date),Ge=o((Fe-De)/60/1e3,1),Ce=e.glucose,Oe=e.noise;we=n(e.delta,w);var Ue=Math.min(e.delta,e.short_avgdelta),Ae=Math.min(e.short_avgdelta,e.long_avgdelta),Re=Math.max(e.delta,e.short_avgdelta,e.long_avgdelta);(Ce<=10||38===Ce||Oe>=3)&&(Me.reason="CGM is calibrating, in ??? state, or noise is high");if(Ge>12||Ge<-5?Me.reason="If current system time "+Fe+" is correct, then BG data is too old. The last BG data was read "+Ge+"m ago at "+De:Ce>60&&e.cgmFlatMinutes>89&&(e.last_cal&&e.last_cal<3?Me.reason="CGM was just calibrated":Me.reason="Error: CGM data was suspiciously flat for the past ~"+o(e.cgmFlatMinutes,1)+"m"),Ce<=10||38===Ce||Oe>=3||Ge>12||Ge<-5||Ce>60&&e.cgmFlatMinutes>89)return r.rate>Te?(Me.reason+=". Replacing high temp basal of "+r.rate+" with neutral temp of "+Te,Me.deliverAt=ye,Me.temp="absolute",Me.duration=30,Me.rate=Te,Me):0===r.rate&&r.duration>30?(Me.reason+=". Shortening "+r.duration+"m long zero temp to 30m. ",Me.deliverAt=ye,Me.temp="absolute",Me.duration=30,Me.rate=0,Me):(Me.reason+=". Temp "+r.rate+" <= current basal "+o(Te,2)+"U/hr; doing nothing. ",Me);var Pe,Ee,ke,je,qe=w.max_iob;if(void 0!==w.min_bg&&(Ee=w.min_bg),void 0!==w.max_bg&&(ke=w.max_bg),void 0!==w.enableSMB_high_bg_target&&(je=w.enableSMB_high_bg_target),void 0===w.min_bg||void 0===w.max_bg)return Me.error="Error: could not determine target_bg. ",Me;Pe=(w.min_bg+w.max_bg)/2;var Le=1,We="",ze=w.exercise_mode||w.high_temptarget_raises_sensitivity,He=100,Ne=160;w.half_basal_exercise_target&&(Ne=w.half_basal_exercise_target),ee&&(Ne=V);var Xe=1;if(ze&&w.temptargetSet&&Pe>He||w.low_temptarget_lowers_sensitivity&&w.temptargetSet&&Pe<He){var Ye=Ne-He;Le=Ye*(Ye+Pe-He)<=0?w.autosens_max:Ye/(Ye+Pe-He),Xe=Le=o(Le=Math.min(Le,w.autosens_max),2),We=" from TT modifier",g+=", Ratio TT: "+Le,process.stderr.write("Sensitivity ratio set to "+Le+" based on temp target of "+Pe+"; ")}else void 0!==D&&D&&w.enable_autosens&&(Le=D.ratio,We=" from Autosens",process.stderr.write("Autosens ratio: "+Le+"; "));var Ze=Xe;if(Le&&(Te=w.current_basal*Le,(Te=t(Te,w))!==Ie?process.stderr.write("Adjusting basal from "+Ie+" to "+Te+"; "):process.stderr.write("Basal unchanged: "+Te+"; ")),w.temptargetSet);else if(void 0!==D&&D&&(w.sensitivity_raises_target&&D.ratio<1||w.resistance_lowers_target&&D.ratio>1)){Ee=o((Ee-60)/D.ratio)+60,ke=o((ke-60)/D.ratio)+60;var $e=o((Pe-60)/D.ratio)+60;Pe===($e=Math.max(80,$e))?process.stderr.write("target_bg unchanged: "+$e+"; "):process.stderr.write("target_bg from "+Pe+" to "+$e+"; "),Pe=$e}var Je=200,Ke=200,Qe=200;if(e.noise>=2){var Ve=Math.max(1.1,w.noisyCGMTargetMultiplier);Math.min(250,w.maxRaw);Je=o(Math.min(200,Ee*Ve)),Ke=o(Math.min(200,Pe*Ve)),Qe=o(Math.min(200,ke*Ve)),process.stderr.write("Raising target_bg for noisy / raw CGM data, from "+Pe+" to "+Ke+"; "),Ee=Je,Pe=Ke,ke=Qe}var er=.5;w.smb_threshold_ratio>.5&&w.smb_threshold_ratio<=1&&(er=w.smb_threshold_ratio);var rr=Ee-(1-er)*(Ee-40);console.log("SMB Threshold set to "+er+" - no SMB's applied below "+n(rr,w));var ar=o(w.sens,1),tr=w.sens;void 0!==D&&D&&((tr=o(tr=w.sens/Le,1))!==ar?process.stderr.write("ISF from "+n(ar,w)+" to "+n(tr,w)):process.stderr.write("ISF unchanged: "+n(tr,w))),console.error("CR: "+w.carb_ratio),console.error("----------------------------------"),console.error(" start autoISF"),console.error("----------------------------------");var or=!0,nr=!1,ir=r.rate,sr=w.b30_duration,lr=sr+1;if(console.error("B30 enabled: "+w.use_B30),w.use_B30&&w.use_autoisf){var ur=w.iTime_Start_Bolus,mr=w.iTime_target,dr=w.b30_upperBG,cr=w.b30_upperdelta,pr=w.b30_factor,br=!1;w.temptargetSet&&(br=!0);var fr=de;0==fr&&(fr=1);var gr=me;console.error("B30 last bolus above limit of "+ur+"U was "+gr+"U, "+fr+"m ago"),gr>=ur&&fr<=sr&&br&&Pe==mr&&(lr=fr,nr=!0,console.error("B30 iTime is running : "+lr+"m because manual bolus ("+gr+") >= Minimum Start Bolus size ("+ur+") and EatingSoon TT set at "+n(mr,w))),console.error("B30 Activation: "+nr),console.error("B30 TTset: "+br+", at "+Pe+", last Bolus of "+gr+"U, "+fr+"m ago. iTime remaining: "+(sr-lr)+"m."),nr&&(e.delta<=cr&&Ce<dr&&(or=!1),lr<=sr&&(ir=t(Te*pr,w),h="AIMI B30, Temp "+ir+"U/hr for "+(sr-lr)+"m, "))}var hr=I(O,w,a,or,Ze),Br=!0;if(O&&"oref"!=hr?("blocked"!=hr&&"AIMI B30"!=hr&&"iobTH"!=hr||(Br=!1),"enforced"!=hr&&"fullLoop"!=hr||(Br=!0),console.error("loopSMB function overriden with autoISF target toggle, enableSMB = "+Br)):(Br=function(e,r,a,t,o,i){return r?!e.allowSMB_with_high_temptarget&&e.temptargetSet&&o>100?(console.error("SMB disabled due to high temptarget of "+o),!1):!0===a.bwFound&&!1===e.A52_risk_enable?(console.error("SMB disabled due to Bolus Wizard activity in the last 6 hours."),!1):!0===e.enableSMB_always?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled due to enableSMB_always"),!0):!0===e.enableSMB_with_COB&&a.mealCOB?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for COB of"+a.mealCOB),!0):!0===e.enableSMB_after_carbs&&a.carbs?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for 6h after carb entry"),!0):!0===e.enableSMB_with_temptarget&&e.temptargetSet&&o<100?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for temptarget of "+n(o,e)),console.error("SMB enabled for temptargets with "+n(o,e)),!0):!0===e.enableSMB_high_bg&&null!==i&&t>=i?(console.error("Checking BG to see if High for SMB enablement."),console.error("Current BG",t," | High BG ",i),a.bwFound?console.error("Warning: High BG SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("High BG detected. Enabling SMB."),!0):(console.error("SMB disabled (no enableSMB preferences active or no condition satisfied)"),!1):(console.error("SMB disabled (!microBolusAllowed)"),!1)}(w,O,G,Ce,Pe,je),console.error("loopSMB function returns enableSMB = "+Br)),tr=function(e,r,a,t,g,h,y,I,w,D,G,C){if(!t.use_autoisf)return console.error("autoISF disabled in Preferences"),i+=", autoISF, disabled",e;if(t.autoISF_off_Sport&&(t.high_temptarget_raises_sensitivity||t.exercise_mode)&&t.temptargetSet&&a>C)return console.error("autoISF disabled due to exercise"),i+=", autoISF, disabled (exercise)",e;const O=g.dura_p,U=g.delta_pl,A=g.delta_pn,R=g.r_squ,P=g.bg_acceleration,E=g.a_0,k=g.a_1,j=g.a_2,q=g.dura_ISF_minutes,L=g.dura_ISF_average;t.autoISF_min;var W=t.autoISF_max,z=!1,H=e,N=a+10-g.glucose,X=g.pp_debug;if("bg_acceleration: "+o(P,3)+", PF-minutes: "+O+", PF-corr: "+o(R,4)+", PF-nextDelta: "+n(A,t)+", PF-lastDelta: "+n(U,t)+", regular Delta: "+n(g.delta,t),console.error(X),t.enable_BG_acceleration){var Y=R;if(0!=j&&Y>=.9){var Z=-k/2/j*5,$=o(E-Z*Z/25*j,1);(Z=o(Z,1))>0&&P<0?(p="predicts a Max of "+n($,t)+", in about "+Math.abs(Z)+"min",console.error("Parabolic fit "+p)):Z>0&&P>0?(p="predicts a Min of "+n($,t)+", in about "+Math.abs(Z)+"min",console.error("Parabolic fit "+p),Z<=30&&$<a&&(v=-t.bgBrake_ISF_weight,p="predicts BG below target soon, applying bgBrake ISF weight of "+-v,console.error("Parabolic fit "+p))):Z<0&&P<0?(p="saw Max of "+n($,t)+", about "+Math.abs(Z)+"min ago",console.error("Parabolic fit "+p)):Z<0&&P>0&&(p="saw Min of "+n($,t)+", about "+Math.abs(Z)+"min ago",console.error("Parabolic fit "+p))}if(Y<.9)p="acce_ISF by-passed, as correlation, "+o(Y,2)+", is too low",console.error("Parabolic fit "+p),d+=", Parabolic Fit, "+p;else{var J=10*(Y-.9),K=1;1==v&&g.glucose<t.target_bg?P>0?(P>1&&(K=.5),v=t.bgBrake_ISF_weight):P<0&&(v=t.bgAccel_ISF_weight):1==v&&(P<0?v=t.bgBrake_ISF_weight:P>0&&(v=t.bgAccel_ISF_weight)),(B=1+P*K*v*J)<0&&(B=.1),console.error(d+"acce_ISF adaptation is "+o(B,2)),1!=B&&(z=!0,d+=", Parabolic Fit, "+p+", acce-ISF Ratio: "+o(B,2))}}else console.error("autoISF BG accelertion adaption disabled in Preferences");i+=s+d+", autoISF",_=1+T(100-N,t,"bg"),console.error("bg_ISF adaptation is "+o(_,2));var Q=1,V=1;if(_<1)return Q=Math.min(_,B),B>1?(c="bg-ISF adaptation lifted to "+o(Q=_*B,2)+", as BG accelerates already",console.error(c),i+=", bg-ISF Ratio: "+o(Q,2)+"(accel.)"):i+=", bg-ISF Ratio: "+o(Q,2)+"(minimal)",V=F(Q,t.autoISF_min,W,w,r,t,G,a,C),H=Math.min(720,o(t.sens/V,1)),i+=", final Ratio: "+o(V,2)+f+b+", final ISF: "+n(t.sens,t)+"→"+n(H,t),H;_>1&&(z=!0,i+=", bg-ISF Ratio: "+o(_,2));var ee=g.delta;t.enable_pp_ISF_always||t.pp_ISF_hours>=(y-h.lastCarbTime)/1e3/3600?deltaType="pp":deltaType="delta",N>0?console.error(deltaType+"_ISF adaptation by-passed as average glucose < "+a+"+10"):g.short_avgdelta<0?console.error(deltaType+"_ISF adaptation by-passed as no rise or too short lived"):"pp"==deltaType?(S=1+Math.max(0,ee*t.pp_ISF_weight),console.error("pp_ISF adaptation is "+o(S,2)),u=", pp-ISF Ratio: "+o(S,2),1!=S&&(z=!0)):(M=T(ee,t,"delta"),N>-20&&(M*=.5),M=1+M,console.error("delta_ISF adaptation is "+o(M,2)),m=", Δ-ISF Ratio: "+o(M,2),1!=M&&(z=!0));var re=t.dura_ISF_weight;h.mealCOB>0&&!t.enableautoisf_with_COB?console.error("dura_ISF by-passed; preferences disabled mealCOB of "+o(h.mealCOB,1)):q<10?console.error("dura_ISF by-passed; BG is only "+q+"m at level "+L):L<=a?console.error("dura_ISF by-passed; avg. glucose "+L+" below target "+n(a,t)):(x+=q/60*(re/a)*(L-a),z=!0,l=", Duration: "+q+", Avg: "+n(L,t)+", dura-ISF Ratio: "+o(x,2),console.error("dura_ISF adaptation is "+o(x,2)+" because ISF "+e+" did not do it for "+o(q,1)+"m"));return z?(Q=Math.max(x,_,M,B,S),console.error("autoISF adaption ratios:"),console.error("  acce "+o(B,2)),console.error("  bg "+o(_,2)),console.error("  dura "+o(x,2)),console.error("  pp "+o(S,2)),console.error("  delta "+o(M,2)),B<1&&(c="strongest autoISF factor "+o(Q,2)+" weakened to "+o(Q*B,2)+" as bg decelerates already",console.error(c),Q*=B),V=F(Q,t.autoISF_min,W,w,r,t,G,a,C),H=o(t.sens/V,1),i+=u+m+l+", final Ratio: "+o(V,2)+f+b+", final ISF: "+n(t.sens,t)+"→"+n(H,t),H):(i+=", not modified",console.error("autoISF does not modify"),H)}(tr,We,Pe,w,e,G,A,0,Le,0,ze,He),console.error("----------------------------------"),console.error(" end autoISF"),console.error("----------------------------------"),void 0===a)return Me.error="Error: iob_data undefined. ",Me;var vr,_r=a;if(a.length,a.length>1&&(a=_r[0]),void 0===a.activity||void 0===a.iob)return Me.error="Error: iob_data missing some property. ",Me;var Mr=((vr=void 0!==a.lastTemp?o((new Date(Fe).getTime()-a.lastTemp.date)/6e4):0)+r.duration)%30;if(console.error("currenttemp:"+r.rate+" lastTempAge:"+vr+"m, tempModulus:"+Mr+"m"),Me.temp="absolute",Me.deliverAt=ye,O&&r&&a.lastTemp&&r.rate!==a.lastTemp.rate&&vr>10&&r.duration)return Me.reason="Warning: currenttemp rate "+r.rate+" != lastTemp rate "+a.lastTemp.rate+" from pumphistory; canceling temp",C.setTempBasal(0,0,w,Me,r);if(r&&a.lastTemp&&r.duration>0){var Sr=vr-a.lastTemp.duration;if(Sr>5&&vr>10)return Me.reason="Warning: currenttemp running but lastTemp from pumphistory ended "+Sr+"m ago; canceling temp",C.setTempBasal(0,0,w,Me,r)}var xr=o(-a.activity*tr*5,2),yr=o(6*(Ue-xr));yr<0&&(yr=o(6*(Ae-xr)))<0&&(yr=o(6*(e.long_avgdelta-xr)));var Ir=Ce,Tr=(Ir=a.iob>0?o(Ce-a.iob*tr):o(Ce-a.iob*Math.min(tr,w.sens)))+yr;if(void 0===Tr||isNaN(Tr))return Me.error="Error: could not calculate eventualBG. Sensitivity: "+tr+" Deviation: "+yr,Me;var Fr=function(e,r,a){return o(a+(e-r)/24,1)}(Pe,Tr,xr);Me={temp:"absolute",bg:n(Ce,w),tick:we,eventualBG:Tr,insulinReq:0,reservoir:U,deliverAt:ye,sensitivityRatio:Le,TDD:_e,insulin:ve};var wr=[],Dr=[],Gr=[],Cr=[];wr.push(Ce),Dr.push(Ce),Cr.push(Ce),Gr.push(Ce);var Or=w.enableUAM,Ur=0,Ar=0;Ur=o(Ue-xr,1);var Rr=o(Ue-xr,1);csf=tr/w.carb_ratio,console.error("profile.sens:"+n(w.sens,w)+", sens:"+n(tr,w)+", CSF:"+o(csf,1));var Pr=o(30*csf*5/60,1);Ur>Pr&&(console.error("Limiting carb impact from "+Ur+" to "+Pr+"mg/dL/5m (30g/h)"),Ur=Pr);var Er=3;Le&&(Er/=Le);var kr=Er;if(G.carbs){Er=Math.max(Er,G.mealCOB/20);var jr=o((new Date(Fe).getTime()-G.lastCarbTime)/6e4),qr=(G.carbs-G.mealCOB)/G.carbs;kr=o(kr=Er+1.5*jr/60,1),console.error("Last carbs "+jr+" minutes ago; remainingCATime:"+kr+"hours; "+o(100*qr)+"% carbs absorbed")}var Lr=Math.max(0,Ur/5*60*kr/2)/csf,Wr=90,zr=1;w.remainingCarbsCap&&(Wr=Math.min(90,w.remainingCarbsCap)),w.remainingCarbsFraction&&(zr=Math.min(1,w.remainingCarbsFraction));var Hr=1-zr,Nr=Math.max(0,G.mealCOB-Lr-G.carbs*Hr),Xr=(Nr=Math.min(Wr,Nr))*csf*5/60/(kr/2),Yr=o(G.slopeFromMaxDeviation,2),Zr=o(G.slopeFromMinDeviation,2),$r=Math.min(Yr,-Zr/3),Jr=0;0===Ur?Ar=0:!0===w.floating_carbs?(Ar=Math.min(60*kr/5/2,Math.max(0,G.carbs*csf/Ur)),Jr=Math.min(60*kr/5/2,Math.max(0,G.mealCOB*csf/Ur)),G.carbs>0&&(i+=", Floating Carbs:, CID: "+o(Ar,1)+", MealCarbs: "+o(G.carbs,1)+", Not Floating:, CID: "+o(Jr,1)+", MealCOB: "+o(G.mealCOB,1),console.error("Floating Carbs CID: "+o(Ar,1)+" / MealCarbs: "+o(G.carbs,1)+" vs. Not Floating:"+o(Jr,1)+" / MealCOB:"+o(G.mealCOB,1)))):Ar=Math.min(60*kr/5/2,Math.max(0,G.mealCOB*csf/Ur)),console.error("Carb Impact:"+Ur+"mg/dL per 5m; CI Duration:"+o(5*Ar/60*2,1)+"hours; remaining CI ("+o(kr/2,2)+"h peak):",o(Xr,1)+"mg/dL per 5m");var Kr,Qr,Vr,ea,ra,aa=999,ta=999,oa=999,na=Ce,ia=999,sa=999,la=999,ua=999,ma=Tr,da=Ce,ca=Ce,pa=0,ba=[],fa=[];try{_r.forEach((function(e){var r=o(-e.activity*tr*5,2),a=o(-e.iobWithZeroTemp.activity*tr*5,2),t=Ur*(1-Math.min(1,Dr.length/12));ma=Dr[Dr.length-1]+r+t;var n=Cr[Cr.length-1]+a,i=Math.max(0,Math.max(0,Ur)*(1-wr.length/Math.max(2*Ar,1))),s=Math.min(wr.length,12*kr-wr.length),l=Math.max(0,s/(kr/2*12)*Xr);i+l,ba.push(o(l,0)),fa.push(o(i,0)),COBpredBG=wr[wr.length-1]+r+Math.min(0,t)+i+l;var u=Math.max(0,Rr+Gr.length*$r),m=Math.max(0,Rr*(1-Gr.length/Math.max(36,1))),d=Math.min(u,m);d>0&&(pa=o(5*(Gr.length+1)/60,1)),UAMpredBG=Gr[Gr.length-1]+r+Math.min(0,t)+d,Dr.length<48&&Dr.push(ma),wr.length<48&&wr.push(COBpredBG),Gr.length<48&&Gr.push(UAMpredBG),Cr.length<48&&Cr.push(n),COBpredBG<ia&&(ia=o(COBpredBG)),UAMpredBG<sa&&(sa=o(UAMpredBG)),ma<la&&(la=o(ma)),n<ua&&(ua=o(n));Dr.length>18&&ma<aa&&(aa=o(ma)),ma>da&&(da=ma),(Ar||Xr>0)&&wr.length>18&&COBpredBG<ta&&(ta=o(COBpredBG)),(Ar||Xr>0)&&COBpredBG>da&&(ca=COBpredBG),Or&&Gr.length>12&&UAMpredBG<oa&&(oa=o(UAMpredBG)),Or&&UAMpredBG>da&&UAMpredBG}))}catch(e){console.error("Problem with iobArray.  Optional feature Advanced Meal Assist disabled")}Me.predBGs={},Dr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))}));for(var ga=Dr.length-1;ga>12&&Dr[ga-1]===Dr[ga];ga--)Dr.pop();for(Me.predBGs.IOB=Dr,Vr=o(Dr[Dr.length-1]),Cr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),ga=Cr.length-1;ga>6&&!(Cr[ga-1]>=Cr[ga]||Cr[ga]<=Pe);ga--)Cr.pop();if(Me.predBGs.ZT=Cr,o(Cr[Cr.length-1]),G.mealCOB>0&&(Ur>0||Xr>0)){for(wr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),ga=wr.length-1;ga>12&&wr[ga-1]===wr[ga];ga--)wr.pop();Me.predBGs.COB=wr,ea=o(wr[wr.length-1]),Tr=Math.max(Tr,o(wr[wr.length-1]))}if(Ur>0||Xr>0){if(Or){for(Gr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),ga=Gr.length-1;ga>12&&Gr[ga-1]===Gr[ga];ga--)Gr.pop();Me.predBGs.UAM=Gr,ra=o(Gr[Gr.length-1]),Gr[Gr.length-1]&&(Tr=Math.max(Tr,o(Gr[Gr.length-1])))}Me.eventualBG=Tr}console.error("UAM Impact:"+Rr+"mg/dL per 5m; UAM Duration:"+pa+"hours"),aa=Math.max(39,aa),ta=Math.max(39,ta),oa=Math.max(39,oa),Kr=o(aa);var ha=G.mealCOB/G.carbs;Qr=o(oa<999&&ta<999?(1-ha)*UAMpredBG+ha*COBpredBG:ta<999?(ma+COBpredBG)/2:oa<999?(ma+UAMpredBG)/2:ma),ua>Qr&&(Qr=ua),na=o(na=Ar||Xr>0?Or?ha*ia+(1-ha)*sa:ia:Or?sa:la);var Ba=oa;if(ua<rr)Ba=(oa+ua)/2;else if(ua<Pe){var va=(ua-rr)/(Pe-rr);Ba=(oa+(oa*va+ua*(1-va)))/2}else ua>oa&&(Ba=(oa+ua)/2);if(Ba=o(Ba),G.carbs)if(!Or&&ta<999)Kr=o(Math.max(aa,ta));else if(ta<999){var _a=ha*ta+(1-ha)*Ba;Kr=o(Math.max(aa,ta,_a))}else Kr=Or?Ba:na;else Or&&(Kr=o(Math.max(aa,Ba)));Kr=Math.min(Kr,Qr),process.stderr.write("minPredBG: "+n(Kr,w)+" minIOBPredBG: "+n(aa,w)+" minZTGuardBG: "+n(ua,w)),ta<999&&process.stderr.write(" minCOBPredBG: "+n(ta,w)),oa<999&&process.stderr.write(" minUAMPredBG: "+n(oa,w)),console.error(" avgPredBG:"+n(Qr,w)+" COB/Carbs:"+G.mealCOB+"/"+G.carbs),ca>Ce&&(Kr=Math.min(Kr,ca)),Me.COB=G.mealCOB,Me.IOB=a.iob,Me.BGI=n(xr,w),Me.deviation=n(yr,w),Me.dura_ISFratio=o(x,2),Me.bg_ISFratio=o(_,2),Me.delta_ISFratio=o(M,2),Me.pp_ISFratio=o(S,2),Me.acce_ISFratio=o(B,2),Me.auto_ISFratio=o(w.sens/tr,2),Me.ISF=n(tr,w),Me.CR=o(w.carb_ratio,2),Me.TDD=o(_e,1),Me.TDDytd=o(K,1),Me.TDD7d=o(Q,1),Me.target_bg=n(Pe,w),Me.minDelta=Ue,Me.expectedDelta=Fr,Me.minGuardBG=na,Me.minPredBG=Kr;var Ma=function(e,r,a,t){if(!e.use_autoisf)return console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),.5;var n=e.smb_delivery_ratio_bg_range;n<10&&(n/=.0555);var i=e.smb_delivery_ratio,s=Math.min(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max),l=Math.max(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max),u=a+n,m=i;return n>0&&(m=s+(l-s)*(r-a)/n,m=Math.max(s,Math.min(l,m))),"fullLoop"==t?(console.error("SMB delivery ratio set to "+o(Math.max(i,m),2)+" as max of fixed and interpolated values"),Math.max(i,m)):0==n?(console.error("SMB delivery ratio set to fixed value "+o(i,2)),i):r<=a?(console.error("SMB delivery ratio limited by minimum value "+o(s,2)),s):r>=u?(console.error("SMB delivery ratio limited by maximum value "+o(l,2)),l):(console.error("SMB delivery ratio set to interpolated value "+o(m,2)),m)}(w,Ce,Pe,hr);Me.SMBratio=o(Ma,2);var Sa="SMB Del.Ratio:, "+o(Ma,2);Me.reason=w.mw_Reason+h+Sa+g+i+", Standard, COB: "+Me.COB+", Dev: "+Me.deviation+", BGI: "+Me.BGI+", ISF: "+Me.ISF+", CR: "+Me.CR+", Target: "+Me.target_bg+", minPredBG "+n(Kr,w)+", minGuardBG "+n(na,w)+", IOBpredBG "+n(Vr,w),ea>0&&(Me.reason+=", COBpredBG "+n(ea,w)),ra>0&&(Me.reason+=", UAMpredBG "+n(ra,w)),Me.reason+="; ";var xa=Ir;xa<40&&(xa=Math.min(na,xa));var ya=rr-xa,Ia=240,Ta=240;if(G.mealCOB>0&&(Ur>0||Xr>0)){for(ga=0;ga<wr.length;ga++)if(wr[ga]<Ee){Ia=5*ga;break}for(ga=0;ga<wr.length;ga++)if(wr[ga]<rr){Ta=5*ga;break}}else{for(ga=0;ga<Dr.length;ga++)if(Dr[ga]<Ee){Ia=5*ga;break}for(ga=0;ga<Dr.length;ga++)if(Dr[ga]<rr){Ta=5*ga;break}}Br&&na<rr&&(console.error("minGuardBG "+n(na,w)+" projected below "+n(rr,w)+" - disabling SMB"),xe=1,Se=o((Tr-Pe)/tr,2),Br=!1);var Fa=.2;"fullLoop"==hr&&(Fa=.3),Re>Fa*Ce&&(console.error("maxDelta "+n(Re,w)+" > "+100*Fa+"% of BG "+n(Ce,w)+" - disabling SMB"),Me.reason+="maxDelta "+n(Re,w)+" > "+100*Fa+"% of BG "+n(Ce,w)+" - SMB disabled!, ",Br=!1),console.error("BG projected to remain above "+n(Ee,w)+" for "+Ia+"minutes"),(Ta<240||Ia<60)&&console.error("BG projected to remain above "+n(rr,w)+" for "+Ta+"minutes");var wa=Ta,Da=w.current_basal*tr*wa/60,Ga=Math.max(0,G.mealCOB-.25*G.carbs),Ca=(ya-Da)/csf-Ga;if(Da=o(Da),Ca=o(Ca),console.error("naive_eventualBG: "+n(Ir,w)+", bgUndershoot: "+n(ya,w)+", zeroTempDuration: "+wa+", zeroTempEffect: "+Da+", carbsReq: "+Ca),"Could not parse clock data"==G.reason?console.error("carbsReq unknown: Could not parse clock data"):Ca>=w.carbsReqThreshold&&Ta<=45&&(Me.carbsReq=Ca,Me.reason+=Ca+" add'l carbs req w/in "+Ta+"m; "),nr&&lr<=sr)return Me.reason+="setting AIMI B30 Temp "+t(ir,w)+"U/hr for "+(sr-lr)+"m ",Me.temp="absolute",Me.deliverAt=ye,Me.duration=Math.min(30,sr-lr),console.error("Forcing AIMI temp "+ir+"U/hr"),C.setTempBasal(ir,30,w,Me,r);var Oa=0;if(Ce<rr&&a.iob<20*-w.current_basal/60&&Ue>0&&Ue>Fr)Me.reason+="IOB "+a.iob+" < "+o(20*-w.current_basal/60,2),Me.reason+=" and minDelta "+n(Ue,w)+" > expectedDelta "+n(Fr,w)+"; ";else if(Ce<rr||na<rr)return Me.reason+="minGuardBG "+n(na,w)+"<"+n(rr,w),na<rr&&(xe=2),Se=o((Tr-Pe)/tr,2),Oa=o(60*((ya=Pe-na)/tr)/w.current_basal),Oa=30*o(Oa/30),Oa=Math.min(120,Math.max(30,Oa)),C.setTempBasal(0,Oa,w,Me,r);if(w.skip_neutral_temps&&Me.deliverAt.getMinutes()>=55){if(!Br)return Me.reason+="; Canceling temp at "+(60-Me.deliverAt.getMinutes())+"min before turn of the hour to avoid beeping of MDT. SMB disabled anyways.",C.setTempBasal(0,0,w,Me,r);console.error(60-Me.deliverAt.getMinutes()+"min before turn of the hour, but SMB's are enabled - no skipping neutral temps")}var Ua=0,Aa=Te;if(Tr<Ee){if(Me.reason+="Eventual BG "+n(Tr,w)+" < "+n(Ee,w),Ue>Fr&&Ue>0&&!Ca)return Ir<40?(Me.reason+=", naive_eventualBG < 40. ",C.setTempBasal(0,30,w,Me,r)):(e.delta>Ue?Me.reason+=", but Delta "+n(we,w)+" > expectedDelta "+n(Fr,w):Me.reason+=", but Min. Delta "+Ue.toFixed(2)+" > Exp. Delta "+n(Fr,w),r.duration>15&&t(Te,w)===t(r.rate,w)?(Me.reason+=", temp "+r.rate+" ~ req "+Te+"U/hr. ",Me):(Me.reason+="; setting current basal of "+Te+" as temp. ",C.setTempBasal(Te,30,w,Me,r)));Ua=o(Ua=2*Math.min(0,(Tr-Pe)/tr),2);var Ra=Math.min(0,(Ir-Pe)/tr);if(Ra=o(Ra,2),Ue<0&&Ue>Fr)Ua=o(Ua*(Ue/Fr),2);if(Aa=t(Aa=Te+2*Ua,w),r.duration*(r.rate-Te)/60<Math.min(Ua,Ra)-.3*Te)return Me.reason+=", "+r.duration+"m@"+r.rate.toFixed(2)+" is a lot less than needed. ",C.setTempBasal(Aa,30,w,Me,r);if(void 0!==r.rate&&r.duration>5&&Aa>=.8*r.rate)return Me.reason+=", temp "+r.rate+" ~< req "+Aa+"U/hr. ",Me;if(Aa<=0){if((Oa=o(60*((ya=Pe-Ir)/tr)/w.current_basal))<0?Oa=0:(Oa=30*o(Oa/30),Oa=Math.min(120,Math.max(0,Oa))),Oa>0)return Me.reason+=", setting "+Oa+"m zero temp. ",C.setTempBasal(Aa,Oa,w,Me,r)}else Me.reason+=", setting "+Aa+"U/hr. ";return C.setTempBasal(Aa,30,w,Me,r)}if(Ue<Fr&&(Me.minDelta=Ue,Me.expectedDelta=Fr,(Fr-Ue>=2||Fr+-1*Ue>=2)&&(xe=Ue>=0&&Fr>0?3:Ue<0&&Fr<=0||Ue<0&&Fr>=0?4:5),Se=o((Tr-Pe)/tr,2),!O||!Br))return e.delta<Ue?Me.reason+="Eventual BG "+n(Tr,w)+" > "+n(Ee,w)+" but Delta "+n(we,w)+" < Exp. Delta "+n(Fr,w):Me.reason+="Eventual BG "+n(Tr,w)+" > "+n(Ee,w)+" but Min. Delta "+Ue.toFixed(2)+" < Exp. Delta "+n(Fr,w),r.duration>15&&t(Te,w)===t(r.rate,w)?(Me.reason+=", temp "+r.rate+" ~ req "+Te+"U/hr. ",Me):(Me.reason+="; setting current basal of "+Te+" as temp. ",C.setTempBasal(Te,30,w,Me,r));if(Math.min(Tr,Kr)<ke&&(Kr<Ee&&Tr>Ee&&(xe=6,Se=o((Tr-Pe)/tr,2)),!O||!Br))return Me.reason+=n(Tr,w)+"-"+n(Kr,w)+" in range: no temp required",r.duration>15&&t(Te,w)===t(r.rate,w)?(Me.reason+=", temp "+r.rate+" ~ req "+Te+"U/hr. ",Me):(Me.reason+="; setting current basal of "+Te+" as temp. ",C.setTempBasal(Te,30,w,Me,r));if(Tr>=ke&&(Me.reason+="Eventual BG "+n(Tr,w)+" >= "+n(ke,w)+", "),a.iob>qe)return Me.reason+="IOB "+o(a.iob,2)+" > max_iob "+qe,r.duration>15&&t(Te,w)===t(r.rate,w)?(Me.reason+=", temp "+r.rate+" ~ req "+Te+"U/hr. ",Me):(Me.reason+="; setting current basal of "+Te+" as temp. ",C.setTempBasal(Te,30,w,Me,r));Ua=o((Math.min(Kr,Tr)-Pe)/tr,2),Se=o((Tr-Pe)/tr,2),Ua>qe-a.iob?(Me.reason+="max_iob "+qe+", ",console.error("InsReq",o(Ua,2),"capped at "+o(qe-a.iob,2)+" to not exceed max_iob"),Ua=qe-a.iob):console.error("SMB not limited by maxIOB ( insulinReq: "+Ua+" U)."),Se>qe-a.iob?(console.error("Ev. Bolus limited by maxIOB: "+qe-a.iob+" (. insulinForManualBolus: "+Se+" U)"),Me.reason+="max_iob "+qe+", "):console.error("Ev. Bolus would not be limited by maxIOB ( insulinForManualBolus: "+Se+" U)."),Aa=t(Aa=Te+2*Ua,w),Ua=o(Ua,3),Me.insulinReq=Ua,Me.insulinForManualBolus=o(Se,2),Me.manualBolusErrorString=xe,Me.minDelta=Ue,Me.expectedDelta=Fr,Me.minGuardBG=na,Me.minPredBG=Kr,Me.threshold=n(rr,w),Me.reason="Ins.Req: "+o(Ua,2)+", "+Me.reason;var Pa=o((new Date(Fe).getTime()-a.lastBolusTime)/6e4,1);if(O&&Br&&Ce>rr){var Ea=o(G.mealCOB/w.carb_ratio,3);if(w.use_autoisf)ka=w.smb_max_range_extension;else{console.error("autoISF disabled, SMB range extension disabled");var ka=1}ka>1&&console.error("SMB max range extended from default by factor "+ka);var ja=0;void 0===w.maxSMBBasalMinutes?(ja=o(ka*w.current_basal*30/60,1),console.error("profile.maxSMBBasalMinutes undefined: defaulting to 30m")):a.iob>Ea&&a.iob>0?(console.error("IOB",a.iob,"> COB",G.mealCOB+"; mealInsulinReq =",Ea),w.maxUAMSMBBasalMinutes?(console.error("profile.maxUAMSMBBasalMinutes:",w.maxUAMSMBBasalMinutes,"profile.current_basal:",w.current_basal),ja=o(ka*w.current_basal*w.maxUAMSMBBasalMinutes/60,1)):(console.error("profile.maxUAMSMBBasalMinutes undefined: defaulting to 30m"),ja=o(30*w.current_basal/60,1))):(console.error("profile.maxSMBBasalMinutes:",w.maxSMBBasalMinutes,"profile.current_basal:",w.current_basal),ja=o(ka*w.current_basal*w.maxSMBBasalMinutes/60,1));var qa=w.bolus_increment,La=1/qa;w.use_autoisf||(console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),Ma=.5),Ma>.5&&console.error("SMB Delivery Ratio increased from default 0.5 to "+o(Ma,2));var Wa=Math.min(Ua*Ma,ja),za=y/100*130/100*w.max_iob*Ze;Wa>za-a.iob&&("fullLoop"==hr||"enforced"==hr)&&(Wa=za-a.iob,console.error("autoISF capped SMB at "+o(Wa,2)+" to not exceed 130% of effective iobTH "+o(za/130*100,2)+"U")),Wa=Math.floor(Wa*La)/La,Oa=o(60*((Pe-(Ir+aa)/2)/tr)/w.current_basal),Ua>0&&Wa<qa&&(Oa=0);var Ha=0;Oa<=0?Oa=0:Oa>=30?(Oa=30*o(Oa/30),Oa=Math.min(60,Math.max(0,Oa))):(Ha=o(Te*Oa/30,2),Oa=30),Me.reason+=" insulinReq "+Ua,Wa>=ja&&(Me.reason+="; maxBolus "+ja),Oa>0&&(Me.reason+="; setting "+Oa+"m low temp of "+Ha+"U/h"),Me.reason+=". ";var Na=3;w.SMBInterval&&(Na=Math.min(10,Math.max(1,w.SMBInterval)));var Xa=o(Na-Pa,0),Ya=o(60*(Na-Pa),0)%60;if(console.error("naive_eventualBG "+n(Ir,w)+", "+Oa+"m "+Ha+"U/h temp needed; last bolus "+Pa+"m ago; maxBolus: "+ja),Pa>Na?Wa>0&&(Me.units=Wa,Me.reason+="Microbolusing "+Wa+"U. "):Me.reason+="Waiting "+Xa+"m "+Ya+"s to microbolus again. ",Oa>0)return Me.rate=Ha,Me.duration=Oa,Me}var Za=C.getMaxSafeBasal(w);return Aa>Za&&(Me.reason+="adj. req. rate: "+o(Aa,2)+" to maxSafeBasal: "+o(Za,2)+", ",Aa=t(Za,w)),r.duration*(r.rate-Te)/60>=2*Ua?(Me.reason+=r.duration+"m@"+r.rate.toFixed(2)+" > 2 * insulinReq. Setting temp basal of "+Aa+"U/hr. ",C.setTempBasal(Aa,30,w,Me,r)):void 0===r.duration||0===r.duration?(Me.reason+="no temp, setting "+Aa+"U/hr. ",C.setTempBasal(Aa,30,w,Me,r)):r.duration>5&&t(Aa,w)<=t(r.rate,w)?(Me.reason+="temp "+r.rate+" >~ req "+Aa+"U/hr. ",Me):(Me.reason+="temp "+r.rate+"<"+Aa+"U/hr. ",C.setTempBasal(Aa,30,w,Me,r))}},6880:(e,r,a)=>{var t=a(6654);e.exports=function(e,r){var a=20;void 0!==r&&"string"==typeof r.model&&(t(r.model,"54")||t(r.model,"23"))&&(a=40);return e<1?Math.round(e*a)/a:e<10?Math.round(20*e)/20:Math.round(10*e)/10}},2705:(e,r,a)=>{var t=a(5639).Symbol;e.exports=t},9932:e=>{e.exports=function(e,r){for(var a=-1,t=null==e?0:e.length,o=Array(t);++a<t;)o[a]=r(e[a],a,e);return o}},9750:e=>{e.exports=function(e,r,a){return e==e&&(void 0!==a&&(e=e<=a?e:a),void 0!==r&&(e=e>=r?e:r)),e}},4239:(e,r,a)=>{var t=a(2705),o=a(9607),n=a(2333),i=t?t.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):n(e)}},531:(e,r,a)=>{var t=a(2705),o=a(9932),n=a(1469),i=a(3448),s=t?t.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(n(r))return o(r,e)+"";if(i(r))return l?l.call(r):"";var a=r+"";return"0"==a&&1/r==-Infinity?"-0":a}},7561:(e,r,a)=>{var t=a(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,t(e)+1).replace(o,""):e}},1957:(e,r,a)=>{var t="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g;e.exports=t},9607:(e,r,a)=>{var t=a(2705),o=Object.prototype,n=o.hasOwnProperty,i=o.toString,s=t?t.toStringTag:void 0;e.exports=function(e){var r=n.call(e,s),a=e[s];try{e[s]=void 0;var t=!0}catch(e){}var o=i.call(e);return t&&(r?e[s]=a:delete e[s]),o}},2333:e=>{var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},5639:(e,r,a)=>{var t=a(1957),o="object"==typeof self&&self&&self.Object===Object&&self,n=t||o||Function("return this")();e.exports=n},7990:e=>{var r=/\s/;e.exports=function(e){for(var a=e.length;a--&&r.test(e.charAt(a)););return a}},6654:(e,r,a)=>{var t=a(9750),o=a(531),n=a(554),i=a(9833);e.exports=function(e,r,a){e=i(e),r=o(r);var s=e.length,l=a=void 0===a?s:t(n(a),0,s);return(a-=r.length)>=0&&e.slice(a,l)==r}},1469:e=>{var r=Array.isArray;e.exports=r},3218:e=>{e.exports=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,r,a)=>{var t=a(4239),o=a(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==t(e)}},8601:(e,r,a)=>{var t=a(4841),o=1/0;e.exports=function(e){return e?(e=t(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,r,a)=>{var t=a(8601);e.exports=function(e){var r=t(e),a=r%1;return r==r?a?r-a:r:0}},4841:(e,r,a)=>{var t=a(7561),o=a(3218),n=a(3448),i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(o(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=o(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=t(e);var a=s.test(e);return a||l.test(e)?u(e.slice(2),a?2:8):i.test(e)?NaN:+e}},9833:(e,r,a)=>{var t=a(531);e.exports=function(e){return null==e?"":t(e)}}},r={};function a(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var t=a(5546);freeaps_determineBasal=t})();