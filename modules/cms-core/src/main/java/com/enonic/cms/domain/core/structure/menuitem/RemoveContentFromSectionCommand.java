/*
 * Copyright 2000-2011 Enonic AS
 * http://www.enonic.com/license
 */
package com.enonic.cms.domain.core.structure.menuitem;

import java.util.ArrayList;
import java.util.List;

import com.enonic.cms.domain.content.ContentKey;
import com.enonic.cms.domain.security.user.UserKey;
import com.enonic.cms.domain.structure.menuitem.MenuItemKey;


public class RemoveContentFromSectionCommand
{
    private UserKey user;

    private MenuItemKey sectionKey;

    private List<ContentKey> contentKeysToRemove = new ArrayList<ContentKey>();

    public UserKey getRemover()
    {
        return user;
    }

    public void setRemover( UserKey user )
    {
        this.user = user;
    }

    public MenuItemKey getSection()
    {
        return sectionKey;
    }

    public void setSection( MenuItemKey sectionKey )
    {
        this.sectionKey = sectionKey;
    }

    public List<ContentKey> getContentToRemove()
    {
        return contentKeysToRemove;
    }

    public void addContentToRemove( ContentKey key )
    {
        contentKeysToRemove.add( key );
    }
}
