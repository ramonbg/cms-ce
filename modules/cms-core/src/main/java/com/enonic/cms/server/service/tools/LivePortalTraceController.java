/*
 * Copyright 2000-2011 Enonic AS
 * http://www.enonic.com/license
 */
package com.enonic.cms.server.service.tools;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.enonic.esl.containers.ExtendedMap;

import com.enonic.cms.business.portal.livetrace.LivePortalTraceService;
import com.enonic.cms.business.portal.livetrace.PastPortalRequestTrace;
import com.enonic.cms.business.portal.livetrace.PortalRequestTrace;

/**
 * This class implements the connection info controller.
 */
public final class LivePortalTraceController
    extends AbstractToolController
{

    private LivePortalTraceService livePortalTraceService;

    @Override
    protected void doHandleRequest( HttpServletRequest req, HttpServletResponse res, ExtendedMap formItems )
    {

        String window = formItems.getString( "window", "" );
        String history = formItems.getString( "history", null );

        if ( "current".equals( window ) )
        {
            List<PortalRequestTrace> currentPortalRequestTraces = livePortalTraceService.getCurrentPortalRequestTraces();
            HashMap<String, Object> model = new HashMap<String, Object>();
            model.put( "currentTraces", currentPortalRequestTraces );
            process( res, model, "livePortalTraceWindow_current" );
        }
        else if ( "longestpagerequests".equals( window ) )
        {
            List<PortalRequestTrace> longestTimePortalRequestTraces = livePortalTraceService.getLongestTimePortalPageRequestTraces();
            HashMap<String, Object> model = new HashMap<String, Object>();
            model.put( "longestTraces", longestTimePortalRequestTraces );
            process( res, model, "livePortalTraceWindow_longest" );
        }
        else if ( "longestattachmentrequests".equals( window ) )
        {
            List<PortalRequestTrace> longestTimePortalRequestTraces = livePortalTraceService.getLongestTimePortalAttachmentRequestTraces();
            HashMap<String, Object> model = new HashMap<String, Object>();
            model.put( "longestTraces", longestTimePortalRequestTraces );
            process( res, model, "livePortalTraceWindow_longest" );
        }
        else if ( "longestimagerequests".equals( window ) )
        {
            List<PortalRequestTrace> longestTimePortalRequestTraces = livePortalTraceService.getLongestTimePortalImageRequestTraces();
            HashMap<String, Object> model = new HashMap<String, Object>();
            model.put( "longestTraces", longestTimePortalRequestTraces );
            process( res, model, "livePortalTraceWindow_longest" );
        }
        else if ( history != null )
        {
            String recordsSinceIdStr = req.getParameter( "records-since-id" );
            Long recordsSinceId = Long.valueOf( recordsSinceIdStr );

            List<PastPortalRequestTrace> pastPortalRequestTraces = livePortalTraceService.getHistorySince( recordsSinceId );
            HashMap<String, Object> model = new HashMap<String, Object>();
            model.put( "pastPortalRequestTraces", pastPortalRequestTraces );

            Long lastHistoryRecordNumber = recordsSinceId;
            if ( pastPortalRequestTraces.size() > 0 )
            {
                lastHistoryRecordNumber = pastPortalRequestTraces.get( 0 ).getHistoryRecordNumber();
            }
            model.put( "lastHistoryRecordNumber", lastHistoryRecordNumber );

            res.setHeader( "Content-Type", "application/json" );
            process( res, model, "livePortalTrace_history_trace" );
        }
        else
        {
            HashMap<String, Object> model = new HashMap<String, Object>();
            model.put( "livePortalTraceEnabled", isLivePortalTraceEnabled() ? 1 : 0 );
            process( res, model, "livePortalTracePage" );
        }
    }

    private boolean isLivePortalTraceEnabled()
    {
        return livePortalTraceService.tracingEnabled();
    }

    public void setLivePortalTraceService( LivePortalTraceService livePortalTraceService )
    {
        this.livePortalTraceService = livePortalTraceService;
    }
}
