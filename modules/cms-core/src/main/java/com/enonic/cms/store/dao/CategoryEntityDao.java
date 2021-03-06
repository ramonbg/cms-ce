/*
 * Copyright 2000-2011 Enonic AS
 * http://www.enonic.com/license
 */
package com.enonic.cms.store.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.enonic.cms.domain.EntityPageList;
import com.enonic.cms.domain.content.category.CategoryEntity;
import com.enonic.cms.domain.content.category.CategoryKey;
import com.enonic.cms.domain.security.group.GroupKey;

public class CategoryEntityDao
    extends AbstractBaseEntityDao<CategoryEntity>
    implements CategoryDao
{

    @Autowired
    @Qualifier("sessionFactory")
    private SessionFactory sessionFactory;

    public void deleteCategory( CategoryEntity category )
    {
        category.setDeleted( true );
        if ( category.getParent() != null )
        {
            sessionFactory.evictCollection( CategoryEntity.class.getName() + ".children", category.getParent().getKey() );
        }
    }

    public CategoryEntity findByKey( CategoryKey key )
    {
        CategoryEntity category = get( CategoryEntity.class, key );

        if ( category == null )
        {
            return null;
        }

        if ( category.isDeleted() )
        {
            return null;
        }
        return category;
    }

    public List<CategoryEntity> findRootCategories()
    {
        return findByNamedQuery( CategoryEntity.class, "CategoryEntity.findAllRootCategories" );
    }

    public List<CategoryEntity> findRootCategories( List<GroupKey> groupKeys )
    {
        List<String> groupKeysStr = GroupKey.convertToStringList( groupKeys );
        return findByNamedQuery( CategoryEntity.class, "CategoryEntity.findRootCategories", "groupKeys", groupKeysStr );
    }

    public EntityPageList<CategoryEntity> findAll( int index, int count )
    {
        return findPageList( CategoryEntity.class, "x.deleted = 0", index, count );
    }

    public long countChildrenByCategory( CategoryEntity category )
    {
        return findSingleByNamedQuery( Long.class, "CategoryEntity.countChildrenByCategoryKey", new String[]{"categoryKey"},
                                       new Object[]{category.getKey()} );
    }
}