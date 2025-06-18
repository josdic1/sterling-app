
reservations = [
    {
      "mid": "m001",
      "member": "Allen",
      "notes": "allergic to shellfish",
      "guests": 4,
      "guest_list": "Foldbig, bulltetmouth, rompy",
      "arrival": "2025-08-16T12:05",
      "id": "832e"
    },
    {
      "mid": "m002",
      "member": "Becca",
      "notes": "birthday celebration",
      "guests": 2,
      "guest_list": "Stollos",
      "arrival": "2025-08-17T11:30",
      "id": "751d"
    },
    {
      "mid": "m003",
      "member": "Carlos",
      "notes": "vegetarian options",
      "guests": 3,
      "guest_list": "Jelousion, Vargy",
      "id": "454a",
      "arrival": "2025-11-17T10:30"
    },
    {
      "mid": "m004",
      "member": "Dana",
      "notes": "wheelchair accessible table",
      "guests": 5,
      "guest_list": "Sleever, Goeis, Jeroult, Pansys",
      "arrival": "2025-07-24T10:40",
      "id": "f5ac"
    },
    {
      "mid": "m005",
      "member": "Eli",
      "notes": "prefers window seat",
      "guests": "2",
      "guest_list": "Goot",
      "arrival": "2025-07-31T13:00",
      "id": "ba7e"
    },
    {
      "mid": "m003",
      "member": "Becca",
      "guests": "1",
      "notes": "Dining alone",
      "arrival": "2025-06-19T10:00",
      "guest_list": "",
      "id": "4753"
    },
    {
      "mid": "m004",
      "member": "Dana",
      "guests": "4",
      "notes": "Big Yost",
      "arrival": "2025-08-08T14:30",
      "guest_list": "Folded Head, Rulebig, Sleever",
      "id": "2d52"
    },
    {
      "mid": "m005",
      "member": "Eli",
      "guests": "6",
      "notes": "Grow east bortest",
      "arrival": "2025-07-12T09:45",
      "guest_list": "Garvoon, Badgit, Hylit, Kylouis, Prenail",
      "id": "18f8"
    },
    {
      "id": "3b19",
      "mid": "m005",
      "member": "Eli",
      "guests": "2",
      "notes": "",
      "arrival": "2025-06-20T10:45",
      "guest_list": "Moonshaker"
    }

  ]
members = [
    {
      "id": "m001",
      "member": "Allen"
    },
    {
      "id": "m002",
      "member": "Becca"
    },
    {
      "id": "m003",
      "member": "Carlos"
    },
    {
      "id": "m004",
      "member": "Dana"
    },
    {
      "id": "m005",
      "member": "Eli"
    }
  ]

if __name__ == "__main__":
    print(f"✅ Loaded {len(reservations)} reservations and {len(members)} members")