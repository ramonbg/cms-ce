/*
 * Copyright 2000-2011 Enonic AS
 * http://www.enonic.com/license
 */
package com.enonic.cms.domain.content.imports;

import com.enonic.cms.domain.content.contenttype.CtyImportConfig;

public abstract class AbstractImportDataReader
    implements ImportDataReader
{
    protected final CtyImportConfig config;

    protected AbstractImportDataReader( final CtyImportConfig config )
    {
        this.config = config;
    }
}