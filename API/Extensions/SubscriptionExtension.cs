﻿using DataAccess;
using Microsoft.EntityFrameworkCore;
using Shared.Entities;

namespace API.Extensions
{
    public class SubscriptionRepository(YumFoodsDb context)
    {
        //public async Task<List<Subscription>> GetAllSubscriptionsAsync()
        //{
        //    return await context.Subscription.ToListAsync();
        //}
    }
}