package com.example.java_2sem_lab_9.controller;

import net.minidev.json.JSONObject;
import com.example.java_2sem_lab_9.model.Item;
import com.example.java_2sem_lab_9.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController//путь будет "/" могу @RequestMapping("/что угодно") если хочу
public class ItemController
{
    @Autowired
    private ItemService itemService;

    @PostMapping("/list")
    public HttpStatus createItem(@RequestBody JSONObject object)
    {
        itemService.addProduct(object.getAsString("name"));
        return HttpStatus.OK;
    }

    @GetMapping("/list")//получаю все товары
    public Iterable<Item> getAll() { return itemService.getAll(); }

    @GetMapping("/list/{id}")//вдруг человеку иммено один товар надо)))
    public Item getItemById(@PathVariable int id)
    {
        return itemService.getItemByIndex(id);
    }

    @PutMapping("/list/{id}")
    public HttpStatus checkItem(@PathVariable int id)
    {
        itemService.checkItem(id);
        return HttpStatus.OK;
    }
    @DeleteMapping("/list/{id}")
    public HttpStatus deleteItem(@PathVariable int id)
    {
        itemService.deleteItem(id);
        return HttpStatus.OK;
    }
}
