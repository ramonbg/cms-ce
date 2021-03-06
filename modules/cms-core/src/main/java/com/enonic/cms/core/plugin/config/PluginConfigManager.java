package com.enonic.cms.core.plugin.config;

import java.io.File;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

import com.enonic.cms.api.util.LogFacade;

public final class PluginConfigManager
    implements BundleActivator
{
    private final static LogFacade LOG = LogFacade.get( PluginConfigManager.class );

    private File configDir;

    public void setConfigDir( final File configDir )
    {
        this.configDir = configDir;
    }

    public void start( final BundleContext context )
        throws Exception
    {
        LOG.info( "Plugin configuration is loaded from [{0}]", this.configDir.getAbsolutePath() );
        new PluginConfigFactory( this.configDir ).register( context );
    }

    public void stop( final BundleContext context )
        throws Exception
    {
        // Do nothing
    }
}
