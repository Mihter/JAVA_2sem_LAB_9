package com.example.java_2sem_lab_9.model;

public class Item
{
    private int id;
    private String name;
    private boolean isPurchased;

    public Item(int id, String name)
    {
        this.id=id;
        this.name=name;
        isPurchased = false;
    }

    public int getId()
    {
        return id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }
    public boolean getIsPurchased()
    {
        return isPurchased;
    }

    public void setIsPurchased()
    {
        isPurchased = !isPurchased;
    }
}
